import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { useContext, useEffect,useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


export default function Post({ post }) {

  const [like,setLike] = useState(post.likes.length)
  const [isLiked,setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser} = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const responce = await axios.get(`/users?userId=${post.userId}`)
        setUser( responce.data)
      
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler =()=>{
    try{
      axios.put(`/posts/${post._id}/like`, {userId:currentUser._id})
    }catch(err) {
      console.log(err)
    }
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="post__Wrapper">
        <div className="post__Top">
          <div className="post__Top-Left">
            <Link to={`profile/${user.username}`}>
              <img
                className="post__Profile-Img"
                src={user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"}
                alt=""
              />
            </Link>
            
            <span className="post__Username">
              {user.username}
            </span>
            <span className="post__Date">{format(post.createdAt)}</span>
          </div>
          <div className="post__Top-Right">
            <MoreVert />
          </div>
        </div>
        <div className="post__Center">
          <span className="post__Text">{post?.desc}</span>
          <img className="post__Img" src={PF + post.img} alt="" />
        </div>
        <div className="post__Bottom">
          <div className="post__Bottom-Left">
            <img className="like__Icon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
            <img className="like__Icon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
            <span className="post__Like-Counter">{like} people like it</span>
          </div>
          <div className="post__Bottom-Right">
            <span className="post__Comment-Text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { useEffect,useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
//import { Link } from "react-router-dom";
//import { AuthContext } from "../../context/AuthContext";


export default function Post({ post }) {

  const [like,setLike] = useState(post.likes.length)
  const [isLiked,setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const responce = await axios.get(`http://localhost:8800/api/users/${post.userId}`)
        setUser( responce.data)
      
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="post__Wrapper">
        <div className="post__Top">
          <div className="post__Top-Left">
            <img
              className="post__Profile-Img"
              src={user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"}
              alt=""
            />
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
            <img className="like__Icon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="like__Icon" src="assets/heart.png" onClick={likeHandler} alt="" />
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
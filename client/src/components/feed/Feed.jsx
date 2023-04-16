import "./feed.css";
import Share from "../share/Share";
// eslint-disable-next-line no-unused-vars
import Post from "../post/Post";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({username}) {
  // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const responce = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get(`/posts/timeline/${user._id}`);
        setPosts(
          responce.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        )
      
    };
    fetchPosts();
    return
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feed__Wrapper">
      {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}

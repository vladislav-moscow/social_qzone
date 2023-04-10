import "./feed.css";
import Share from "../share/Share";
// eslint-disable-next-line no-unused-vars
import Post from "../post/Post";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
  // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const responce = await axios.get("http://localhost:8800/api/posts/timeline/642f0c383434e09bdb761213")
        setPosts( responce.data)
      
    };
    fetchPosts();
  }, []);
  return (
    <div className="feed">
      <div className="feed__Wrapper">
      <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}

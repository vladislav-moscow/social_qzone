import "./feed.css";
import Share from "../share/Share";
// eslint-disable-next-line no-unused-vars
import Post from "../post/Post";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import Modal from "../modal/Modal";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [active, setActive] = useState(false);
  const { user } = useContext(AuthContext);
  const options = ["Редактировать", "Удалить"];

  const toogleModal = () => {
    setModalActive((prev) => !prev);
  };
  const toogleAgreeBtn = () => {
    setActive((prev) => !prev);
    toogleModal();
  };

  const handleClickDelete = async (id) => {
    toogleModal();
    if (active) {
      console.log("1");
      /*const res = await axios.delete(`/posts/${id}/${user._id}`);
    if (res.status === 200) {
      const resp = await axios.get(`/posts/timeline/${user._id}`);
      setPosts(
        resp.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    }*/
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const responce = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get(`/posts/timeline/${user._id}`);
      setPosts(
        responce.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
      return;
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feed__Wrapper">
        {(!username || username === user.username) && <Share />}
        {posts &&
          posts.length > 0 &&
          posts.map((p) => (
            <Post
              key={p._id}
              post={p}
              options={options}
              handleClickDelete={handleClickDelete}
            />
          ))}
      </div>
      <Modal
        active={modalActive}
        handleClickActive={toogleModal}
        handleClickAgree={toogleAgreeBtn}
      />
    </div>
  );
}

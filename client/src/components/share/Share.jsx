import "./share.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@mui/icons-material";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="share__Wrapper">
        <div className="share__Top">
          <img
            className="share__Profile-Img"
            src={
              user?.profilePicture
                ? PF + user?.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
          <input
            placeholder={`Что у тебя на уме ${user.username}?`}
            className="share__Input"
            ref={desc}
          />
        </div>
        <hr className="share__Hr" />
        {file && (
          <div className="share__Img-Container">
            <img
              className="share__Img"
              src={URL.createObjectURL(file)}
              alt=""
            />
            <Cancel
              className="share__Cancel-Img"
              onClick={() => setFile(null)}
            />
          </div>
        )}
        <form className="share__Bottom" onSubmit={submitHandler}>
          <div className="share__Options">
            <label htmlFor="file" className="share__Option">
              <PermMedia htmlColor="tomato" className="share__Icon" />
              <span className="share__Option-Text">Каритнка или видео</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg,.mp4,.avi"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="share__Option">
              <Label htmlColor="blue" className="share__Icon" />
              <span className="share__Option-Text">Загаловок</span>
            </div>
            <div className="share__Option">
              <Room htmlColor="green" className="share__Icon" />
              <span className="share__Option-Text">Местоположение</span>
            </div>
            <div className="share__Option">
              <EmojiEmotions htmlColor="goldenrod" className="share__Icon" />
              <span className="share__Option-Text">Смайлик</span>
            </div>
          </div>
          <button className="share__Button" type="submit">
            Опубликовать
          </button>
        </form>
      </div>
    </div>
  );
}

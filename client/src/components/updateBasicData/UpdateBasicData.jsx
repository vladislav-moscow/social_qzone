import "./updateBasicData.css";
import { useRef, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function UpdateBasicData() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  
  const handleClickUpdateData = async (e) => {
    e.preventDefault();
    let user = {
      userId: currentUser._id
    };
    if(password.current.value) {
      user = {password:password.current.value, ...user }
    }
    if(email.current.value) {
      user = {email:email.current.value, ...user }
    }
    if(username.current.value) {
      user = {username:username.current.value, ...user }
    }
    try{
     await axios.put(`/users/${currentUser._id}`, {...user});
     dispatch({ type: "FOLLOW", payload: user });
      navigate("/");
    } catch(err) {
      console.log(err);
    }
  };
  
  return (
    <>
      <form className="login__Box" onSubmit={handleClickUpdateData}>
        <input ref={username} placeholder="Username" className="login__Input" />
        <input
          ref={email}
          placeholder="Email"
          type="email"
          className="login__Input"
        />
        <input
          ref={password}
          placeholder="Password"
          type="password"
          min="6"
          className="login__Input"
        />
        <button className="login__Button" type="submit">
          Обновить
        </button>
        
      </form>
    </>
  );
}

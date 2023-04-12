import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Пароли не совпадают!")
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try{
        await axios.post("http://localhost:8800/api/auth/register", user);
        navigate("/login");
      } catch(err) {
        console.log(err);
      }
    }
    
    return
  };

  const navigateClick = (e) => {
    e.preventDefault()
    navigate("/login");
  };
  return (
    <div className="login">
      <div className="login__Wrapper">
        <div className="login__Left">
          <h3 className="login__Logo">Social</h3>
          <span className="login__Desc">
            Connect with friends and the world around you on Social.
          </span>
        </div>
        <div className="login__Right">
          <form className="login__Box" onSubmit={handleClick}>
            <input ref={username} placeholder="Username" className="login__Input" />
            <input ref={email} placeholder="Email" type="email" required className="login__Input" />
            <input ref={password} placeholder="Password" type="password" required min="6" className="login__Input" />
            <input ref={passwordAgain} placeholder="Password Again" type="password" required className="login__Input" />
            <button className="login__Button" type="submit">Sign Up</button>
            <button className="login__Register-Button" onClick={navigateClick}>
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

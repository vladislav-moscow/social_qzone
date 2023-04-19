import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  let navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const {user, isFetching, error, dispatch} = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault()
    loginCall({email:email.current.value, password:password.current.value}, dispatch)
    
  };

  const navigateClick = (e) => {
    e.preventDefault()
    navigate("/register");
  }


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
            <input ref={email} placeholder="Email" type="email" required className="login__Input" />
            <input ref={password} placeholder="Password" type="password" required minLength="6" className="login__Input" />
            <button className="login__Button" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress sx={{ color: 'white' }}/>
              ) : (
                "Log In"
              )}
            </button>
            <span className="login__Forgot">Forgot Password?</span>
            <button className="login__Register-Button" type="submit" onClick={navigateClick}>
            {isFetching ? (
                <CircularProgress sx={{ color: 'white' }}/>
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

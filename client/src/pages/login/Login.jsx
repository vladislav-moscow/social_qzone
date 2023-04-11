import { useRef } from "react"
import "./login.css"

export default function Login() {
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault()

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
          <form className="login__Box" onClick={handleClick}>
            <input ref={email} placeholder="Email" type="email" required className="login__Input" />
            <input ref={password} placeholder="Password" type="password" required minLength="6" className="login__Input" />
            <button className="login__Button">Log In</button>
            <span className="login__Forgot">Forgot Password?</span>
            <button className="login__Register-Button">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

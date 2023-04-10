import "./register.css"

export default function Register() {
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
          <div className="login__Box">
            <input placeholder="Username" className="login__Input" />
            <input placeholder="Email" className="login__Input" />
            <input placeholder="Password" className="login__Input" />
            <input placeholder="Password Again" className="login__Input" />
            <button className="login__Button">Sign Up</button>
            <button className="login__Register-Button">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

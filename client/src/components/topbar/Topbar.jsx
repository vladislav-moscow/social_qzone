import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { useContext } from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user} = useContext(AuthContext)
  return (
    <div className="topbar__Container">
      <div className="topbar__Left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">
          <img src={`${PF}logo.png`} alt="" />
        </span>
        </Link>
        
      </div>
      <div className="topbar__Center">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="поиск..." className="searchInput" />
        </div>
      </div>
      <div className="topbar__Right">
        <div className="topbar__Links">
          <span className="topbar__Link">Homepage</span>
          <span className="topbar__Link">Timeline</span>
        </div>
        <div className="topbar__Icons">
          <div className="topbar__Icon-Item">
            <Person/>
            <span className="topbar__Icon-Badge">1</span>
          </div>
          <div className="topbar__Icon-Item">
            <Chat/>
            <span className="topbar__Icon-Badge">2</span>
          </div>
          <div className="topbar__Icon-Item">
            <Notifications/>
            <span className="topbar__Icon-Badge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" className="topbar__Img" />
        </Link>
        
      </div>
    </div>
  )
}

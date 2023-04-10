import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import {Link} from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar__Container">
      <div className="topbar__Left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Social</span>
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
        <img src="/assets/person/1.jpeg" alt="" className="topbar__Img" />
      </div>
    </div>
  )
}

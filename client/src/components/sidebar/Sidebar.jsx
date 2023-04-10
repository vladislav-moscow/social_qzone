import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__Wrapper">
        <ul className="sidebar__List">
          <li className="sidebar__ListItem">
            <RssFeed className="sidebar__Icon" />
            <span className="sidebar__ListItemText">Feed</span>
          </li>
          <li className="sidebar__ListItem">
            <Chat className="sidebar__Icon" />
            <span className="sidebar__ListItemText">Chats</span>
          </li>
          <li className="sidebar__ListItem">
            <PlayCircleFilledOutlined className="sidebar__Icon" />
            <span className="sidebar__ListItemText">Videos</span>
          </li>
          <li className="sidebar__ListItem">
            <Group className="sidebar__Icon" />
            <span className="sidebar__ListItemText">Groups</span>
          </li>
          <li className="sidebar__ListItem">
            <Bookmark className="sidebar__Icon" />
            <span className="sidebar__ListItemText">Bookmarks</span>
          </li>
          <li className="sidebar__ListItem">
            <HelpOutline className="sidebar__Icon" />
            <span className="sidebar__ListItemText">Questions</span>
          </li>
          <li className="sidebar__ListItem">
            <WorkOutline className="sidebar__Icon" />
            <span className="sidebar__ListItemText">Jobs</span>
          </li>
          <li className="sidebar__ListItem">
            <Event className="sidebar__Icon" />
            <span className="sidebar__ListItemText">Events</span>
          </li>
          <li className="sidebar__ListItem">
            <School className="sidebar__Icon" />
            <span className="sidebar__ListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebar__Button">Show More</button>
        <hr className="sidebar__Hr" />
        <ul className="sidebar__FriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
          </ul>
      </div>
    </div>
  )
}

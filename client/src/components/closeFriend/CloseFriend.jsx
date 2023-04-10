import "./closeFriend.css";

export default function CloseFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebar__Friend">
      <img className="sidebar__Friend-Img" src={PF+user.profilePicture} alt="" />
      <span className="sidebar__Friend-Name">{user.username}</span>
    </li>
  );
}
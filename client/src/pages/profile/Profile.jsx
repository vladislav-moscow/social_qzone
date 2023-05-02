import "./profile.css";
import { useEffect,useState } from "react";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useParams } from "react-router-dom";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const { username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
 
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile__Right">
          <div className="profile__Right-Top">
            <div className="profile__Cover">
              <img
                className="profile__Cover-Img"
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/noCover.png"
                }
                alt=""
              />
              <img
                className="profile__User-Img"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </div>
            <div className="profile__Info">
                <h4 className="profile__Info-Name">{user.username}</h4>
                <span className="profile__Info-Desc">{user.desc}</span>
            </div>
          </div>
          <div className="profile__Right-Bottom">
            <Feed username={username}/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}
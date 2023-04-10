import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
                src={`${PF}post/3.jpeg`}
                alt=""
              />
              <img
                className="profile__User-Img"
                src={`${PF}person/7.jpeg`}
                alt=""
              />
            </div>
            <div className="profile__Info">
                <h4 className="profile__Info-Name">Safak Kocaoglu</h4>
                <span className="profile__Info-Desc">Hello my friends!</span>
            </div>
          </div>
          <div className="profile__Right-Bottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
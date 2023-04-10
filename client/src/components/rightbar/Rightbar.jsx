/* eslint-disable no-unused-vars */
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
      <div className="birthday__Container">
          <img src="/assets/gift.png" alt="" className="birthday__Img" />
          <span className="birthday__Text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbar__Ad" />
        <h4 className="rightbar__Title">Online Friends</h4>
        <ul className="rightbar__Friend-List">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
    </>
    )
  }

  const ProfileRightbar = () => {
    return(
      <>
        <h4 className="rightbar__Title">User information</h4>
        <div className="rightbar__Info">
          <div className="rightbar__Info-Item">
            <span className="rightbar__Info-Key">City:</span>
            <span className="rightbar__Info-Value">Moscow</span>
          </div>
          <div className="rightbar__Info-Item">
            <span className="rightbar__Info-Key">From:</span>
            <span className="rightbar__Info-Value">Madrid</span>
          </div>
          <div className="rightbar__Info-Item">
            <span className="rightbar__Info-Key">Relationship:</span>
            <span className="rightbar__Info-Value">Single</span>
          </div>
        </div>
        <h4 className="rightbar__Title">User friends</h4>
        <div className="rightbar__Followings">
          <div className="rightbar__Following">
            <img
              src={`${PF}person/1.jpeg`}
              alt=""
              className="rightbar__Following-Img"
            />
            <span className="rightbar__Following-Name">John Carter</span>
          </div>
          <div className="rightbar__Following">
            <img
              src={`${PF}person/2.jpeg`}
              alt=""
              className="rightbar__Following-Img"
            />
            <span className="rightbar__Following-Name">John Carter</span>
          </div>
          <div className="rightbar__Following">
            <img
              src={`${PF}person/3.jpeg`}
              alt=""
              className="rightbar__Following-Img"
            />
            <span className="rightbar__Following-Name">John Carter</span>
          </div>
          <div className="rightbar__Following">
            <img
              src={`${PF}person/4.jpeg`}
              alt=""
              className="rightbar__Following-Img"
            />
            <span className="rightbar__Following-Name">John Carter</span>
          </div>
          <div className="rightbar__Following">
            <img
              src={`${PF}person/5.jpeg`}
              alt=""
              className="rightbar__Following-Img"
            />
            <span className="rightbar__Following-Name">John Carter</span>
          </div>
          <div className="rightbar__Following">
            <img
              src={`${PF}person/6.jpeg`}
              alt=""
              className="rightbar__Following-Img"
            />
            <span className="rightbar__Following-Name">John Carter</span>
          </div>
          <div className="rightbar__Following">
            <img
              src={`${PF}person/7.jpeg`}
              alt=""
              className="rightbar__Following-Img"
            />
            <span className="rightbar__Following-Name">John Carter</span>
          </div>
          <div className="rightbar__Following">
            <img
              src={`${PF}person/8.jpeg`}
              alt=""
              className="rightbar__Following-Img"
            />
            <span className="rightbar__Following-Name">John Carter</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbar__Wrapper">
        { profile ? <ProfileRightbar/> : <HomeRightbar/> }
      </div>
    </div>
  )
}

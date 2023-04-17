/* eslint-disable no-unused-vars */
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@mui/icons-material";

export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
      return
    };
    getFriends();
    
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
    return
  };

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
        {user.username !== currentUser.username && (
          <button className="rightbar__Follow-Button" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbar__Title">User information</h4>
        <div className="rightbar__Info">
          <div className="rightbar__Info-Item">
            <span className="rightbar__Info-Key">City:</span>
            <span className="rightbar__Info-Value">{user.city}</span>
          </div>
          <div className="rightbar__Info-Item">
            <span className="rightbar__Info-Key">From:</span>
            <span className="rightbar__Info-Value">{user.from}</span>
          </div>
          <div className="rightbar__Info-Item">
            <span className="rightbar__Info-Key">Status:</span>
            <span className="rightbar__Info-Value">
              { user.gender === 1 ?
                  user.relationship === 1 ? "Не женат" : user.relationship === 2 ? "Женат" : "Есть подруга"
                :
                  user.relationship === 1 ? "Не замужем" : user.relationship === 2 ? "Замужем" : "Есть друг"
              }
            </span>
          </div>
        </div>
        <h4 className="rightbar__Title">User friends</h4>
        <div className="rightbar__Followings">
        {friends.map((friend) => (
            <Link key={friend._id}
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbar__Following">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbar__Following-Img"
                />
                <span className="rightbar__Following-Name">{friend.username}</span>
              </div>
            </Link>
          ))}
          
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbar__Wrapper">
        { user ? <ProfileRightbar/> : <HomeRightbar/> }
      </div>
    </div>
  )
}

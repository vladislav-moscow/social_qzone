/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react"
import "./conversation.css"
import axios from "axios"

export default function Сonversation({conversation, currentUser}) {
  const [user, SetUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(()=> {
    const friendId = conversation.members.find(( m )=> m !== currentUser._id);
    const getUser = async () => {
      try{
        const res = await axios("/users?userId=" + friendId);
        SetUser(res.data);
      } catch(err) {console.log(err)}
      return
    };
    getUser();
  }, [currentUser, conversation])
  return (
    <div className="conversation">
      <img className="conversation__Img" src={user?.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="Photo users" />
      <span className="conversation__Name">{user?.username}</span>
    </div>
  )
}

import "./messenger.css";
import Topbar from "../../components/topbar/Topbar"
import Сonversation from "../../components/conversation/Сonversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";


export default function Messenger() {
  const [conversation, SetConversation] = useState([]);
  const [currentChat, SetCurrentChat] = useState(null);
  const [messages, SetMessages] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    const getConversation = async () => {
      try{
        const responce = await axios.get("/conversations/"+user._id);
        SetConversation(responce.data)
      }catch(err) {
        console.log(err)
      }
      return
    }
    getConversation();

  },[user._id]);

  return (
    <>
      <Topbar/>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenu__Wrapper">
            <input type="text" placeholder="Поиск друзей..." className="chatMenu__Input"/>
            {conversation.map(conv => ( 
              <div onClick={()=> SetCurrentChat}>
                <Сonversation key={conv._id} conversation={conv} currentUser={user}/>
              </div>
              
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBox__Wrapper">
            {
              currentChat ?
            <>
            <div className="chatBox__Top">
              <Message/>
              <Message own={true}/>
              <Message/>
              <Message own={true}/>
              <Message/>
            </div>
            <div className="chatBox__Bottom">
              <textarea className="chatBox__Message-Input" placeholder="Введите ваше сообщение..."></textarea>
              <button className="chatBox-Btn">Отправить</button>
            </div></> : <span className="noConversationText">Открыть беседу для начало общения</span>
            }
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnline__Wrapper">
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
            <ChatOnline/>
          </div>
        </div>
      </div>
    </>
    
  )
}

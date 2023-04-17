import "./messenger.css";
import Topbar from "../../components/topbar/Topbar"
import Сonversation from "../../components/conversation/Сonversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";


export default function Messenger() {
  return (
    <>
      <Topbar/>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenu__Wrapper">
            <input type="text" placeholder="Поиск друзей..." className="chatMenu__Input"/>
            <Сonversation/>
            <Сonversation/>
            <Сonversation/>
            <Сonversation/>
            <Сonversation/>
            <Сonversation/>
            <Сonversation/>
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBox__Wrapper">
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
            </div>
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

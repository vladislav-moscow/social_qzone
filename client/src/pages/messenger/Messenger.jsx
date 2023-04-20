/* eslint-disable no-unused-vars */
import "./messenger.css";
import Topbar from "../../components/topbar/Topbar"
import Сonversation from "../../components/conversation/Сonversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import {io} from "socket.io-client";

/**
 * params {array} conversation содержит все беседы пользователя
 * params {object} currentChat содержит данные текущего чата 
 * params {array} messages содержит все сообщения пользователя в текущем чате
 * params {object} newMessage содержит все беседы пользователя
 * params {array} user получаете из контекста пользователя который сейчас в сети
 * params {array} scrollRef производит скролл до последнего сообщения
 * return страницу сообщений со всеми данными
 */
export default function Messenger() {
  const [conversation, SetConversation] = useState([]); 
  const [currentChat, SetCurrentChat] = useState(null);
  const [messages, SetMessages] = useState([]);
  const [newMessage, SetNewMessage] = useState("");
  const [socket, SetSocket] = useState(null)
  const {user} = useContext(AuthContext);
  const scrollRef = useRef();

/**
* params {array} responce содержит данные запрос на получения всех бесед пользователя
* params {string} user._id содержит id пользователя который в данный момент в приложении
* params {array} SetConversation принимает в себя массив бесед из запроса
* return возвращает беседы текущего пользователя, сделан в эффекте для постоянного рендера бесед
*/
  useEffect(() => {
    const getConversation = async () => {
      try{
        const responce = await axios.get("/conversations/"+user?._id);
        SetConversation(responce.data);
      }catch(err) {console.log(err)};
      return
    }
    getConversation();
  },[user._id]);

/**
* params {array} responce содержит данные запрос на получения всех сообщений данной беседы
* params {string} currentChat?._id содержит id беседы в которую заходим
* params {array} SetMessages принимает в себя массив сообщений из запроса в текущей беседе
* return возвращает сообщения текущей беседы для нашего пользователя, сделан в эффекте для постоянного рендера сообщений
*/
  useEffect(() => {
    const getMessages = async() => {
      try{
        const responce = await axios.get("/messages/"+currentChat?._id)
        SetMessages(responce.data);
      }catch(err){console.log(err)}
      return
    };
    getMessages()
  },[currentChat]);

/**
* params {object} message формирует новый объект  из данных для отправления на сервер
* params {array} responce содержит данные запроса на получение нового сообщения
* params {string} SetNewMessage удаляет введенный данные из импута
* params {array} SetMessages принимает в себя массив из разложеного массива старых сообщений и нового сообшения
* return возвращает сообщения текущей беседы для нашего пользователя, сделан в эффекте для постоянного рендера сообщений
*/
  const handleSubmitMessage = async (e) => {
    e.preventDefault();

    /**
    * params {string} sender содержит id текущего пользователя  который написал сообщение
    * params {string} text содержит текстовые данные которые ввел пользователь
    * params {string} conversationId содержит id беседы в которой пользователь написал
    * return возвращает объект с новыми данными для отправки их на сервер
    */
    const message = {
      sender:user._id,
      text: newMessage,
      conversationId: currentChat._id
    };
    try{
      const responce = await axios.post("/messages", message);
      SetMessages([...messages, responce.data]);
      SetNewMessage("");
    }catch(err) {console.log(err)}
    return
  }

/**
* params {string} messages содержит массив сообеший текущей беседы
* params {} scrollRef установлен на блоке с сообщением
* params {} scrollIntoView метод элемента для скрола контейнера
* params {} behavior анимация прокрутки
* return возвращает скролл до последнего сообщения и при добавлении сообщения скролит вниз
*/
  useEffect(()=> {
    scrollRef.current?.scrollIntoView({behavior:"smooth"})
  },[messages]);

  return (
    <>
      <Topbar/>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenu__Wrapper">
            <input type="text" placeholder="Поиск друзей..." className="chatMenu__Input"/>
            {conversation.map(conv => ( 
              <div onClick={()=> SetCurrentChat(conv)} key={conv._id}>
                <Сonversation conversation={conv} currentUser={user}/>
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
              {messages.map((message)=> (
                <div ref={scrollRef} key={message._id}>
                  <Message message={message} own={message.sender === user._id}/>
                </div>
              ))}
              
              
            </div>
            <div className="chatBox__Bottom">
              <textarea 
                className="chatBox__Message-Input" 
                placeholder="Введите ваше сообщение..." 
                onChange={(e)=> {SetNewMessage(e.target.value)}}
                value={newMessage}
              >
              </textarea>
              <button className="chatBox-Btn" onClick={handleSubmitMessage}>Отправить</button>
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

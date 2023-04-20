/* eslint-disable jsx-a11y/img-redundant-alt */
import "./message.css";
import {format} from "timeago.js";

export default function Message({message,own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="message__Top">
        <img className="message__Img" src="https://blogforlife.org/wp-content/uploads/2019/04/post_0449_0_john_snow.jpg" alt="Photo users"/>
        <p className="message__Text">
          {message.text}
        </p>
      </div>
      <div className="message__Bottom">{format(message.createdAt)}</div>
    </div>
  )
}

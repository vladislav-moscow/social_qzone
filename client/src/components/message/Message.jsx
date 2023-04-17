/* eslint-disable jsx-a11y/img-redundant-alt */
import "./message.css"

export default function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="message__Top">
        <img className="message__Img" src="https://blogforlife.org/wp-content/uploads/2019/04/post_0449_0_john_snow.jpg" alt="Photo users"/>
        <p className="message__Text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Expedita vitae, hic quia facere inventore.
        </p>
      </div>
      <div className="message__Bottom">1 час назад</div>
    </div>
  )
}

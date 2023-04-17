import "./chatOnline.css"

export default function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnline__Friend">
        <div className="chatOnline__Img-Container">
          <img className="chatOnline__Img" src="https://blogforlife.org/wp-content/uploads/2019/04/post_0449_0_john_snow.jpg" alt="" />
          <div className="chatOnline__Badge"></div>
        </div>
        <span className="chatOnline__Name">John Snow</span>
      </div>
    </div>
  )
}

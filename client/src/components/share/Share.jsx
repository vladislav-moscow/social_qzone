import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
      <div className="share__Wrapper">
        <div className="share__Top">
          <img className="share__Profile-Img" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="share__Input"
          />
        </div>
        <hr className="share__Hr"/>
        <div className="share__Bottom">
            <div className="share__Options">
                <div className="share__Option">
                    <PermMedia htmlColor="tomato" className="share__Icon"/>
                    <span className="share__Option-Text">Photo or Video</span>
                </div>
                <div className="share__Option">
                    <Label htmlColor="blue" className="share__Icon"/>
                    <span className="share__Option-Text">Tag</span>
                </div>
                <div className="share__Option">
                    <Room htmlColor="green" className="share__Icon"/>
                    <span className="share__Option-Text">Location</span>
                </div>
                <div className="share__Option">
                    <EmojiEmotions htmlColor="goldenrod" className="share__Icon"/>
                    <span className="share__Option-Text">Feelings</span>
                </div>
            </div>
            <button className="share__Button">Share</button>
        </div>
      </div>
    </div>
  );
}
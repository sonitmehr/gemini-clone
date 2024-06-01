import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

function Main() {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user_icon" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Sonit.</span>
          </p>
          <p>How can I help you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest beatiful places to see on an upcoming road trop</p>
            <img src={assets.compass_icon} alt="compass_icon" />
          </div>
          <div className="card">
            <p>Suggest beatiful places to see on an upcoming road trop</p>
            <img src={assets.bulb_icon} alt="bulb_icon" />
          </div>
          <div className="card">
            <p>Suggest beatiful places to see on an upcoming road trop</p>
            <img src={assets.message_icon} alt="message_icon" />
          </div>
          <div className="card">
            <p>Suggest beatiful places to see on an upcoming road trop</p>
            <img src={assets.coding_icon} alt="code_icon" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="gallery_icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              <img src={assets.send_icon} alt="send_icon" />
            </div>
          </div>
          <p className="bottom-info">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus quo, beatae quos repellendus amet?      </p>
        </div>
      </div>
    </div>
  );
}

export default Main;

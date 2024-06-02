import React, { useContext, useState } from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
function SideBar() {
  const [extended, setExtended] = useState(false);
  const { onSend, previousPrompt, setRecentPrompt,newChat} =
    useContext(Context);

  const loadPrompt = async(prompt) => {
      setRecentPrompt(prompt);
      await onSend(prompt);
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=> setExtended(prev => !prev)} src={assets.menu_icon} alt="menu_icon" className="menu" />
        <div className="new-chat" onClick={()=> newChat()}>
          <img src={assets.plus_icon} alt="plus_icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent" >
            <p className="recent-title">Recent</p>
            {previousPrompt && previousPrompt.map( (item,index)=> {
              return (
                <div
                  className="recent-entry"
                  key={index}
                  onClick={() => loadPrompt(item)}
                >
                  <img src={assets.message_icon} alt="message_icon" />
                  <p>{item.length > 18 ? item.slice(0,18) + "..." : item}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question_icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history_icon" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.settings_icon} alt="settings_icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default SideBar;

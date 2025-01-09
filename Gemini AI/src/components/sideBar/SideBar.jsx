import React, { useContext, useState } from "react";
import "./sideBar.css";
import { IoMenuSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineQuestionMark } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { Context } from "../../context/Context";

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPromots, setRecentPrompt,newChat } = useContext(Context);
  
  const loadPrompt = async(prompt)=>{
    setRecentPrompt(prompt)
      await onSent(prompt)
  }
  return (
    <div className="sideBar">
      <div className="top">
        <IoMenuSharp
          className="menu"
          onClick={() => {
            setExtended((prev) => !prev);
          }}
        />
        <div className="new-chat" onClick={newChat}>
          <FaPlus />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPromots.map((item, index) => {
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry" key={index}>
                  <FaRegMessage />
                  <p>{item.slice(0,18)} ...</p>
                  <PiDotsThreeVerticalBold />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <MdOutlineQuestionMark />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <MdHistory />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <IoSettings />
          {extended && <p>Settings</p>}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SideBar;

import React, { useState } from "react";
import "./sideBar.css";
import { IoMenuSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineQuestionMark } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const SideBar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sideBar">
      <div className="top">
        <IoMenuSharp className="menu" onClick={()=>{setExtended(prev=>!prev)}} />
        <div className="new-chat">
          <FaPlus />
          {extended && <p>New Chat</p>}
        </div>
        {extended && <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <FaRegMessage />
            <p>What is React?...</p>
            <PiDotsThreeVerticalBold />
          </div>
        </div>}
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

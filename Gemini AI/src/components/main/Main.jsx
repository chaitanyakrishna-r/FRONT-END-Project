import React from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { IoCompassOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";




const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.geminiLogo} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Chaitanya.</span></p>
                <p>How can I Help You Today.</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest Beautiful places to see on an upcoming road trip</p>
                    <IoCompassOutline className='icon'/>
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <FaRegLightbulb className='icon'/>
                </div>
                <div className="card">
                    <p>Suggest Beautiful places to see on an upcoming road trip</p>
                    <FaRegMessage className='icon'/>
                </div>
                <div className="card">
                    <p>Suggest Beautiful places to see on an upcoming road trip</p>
                    <FaCode className='icon'/>
                </div>
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a Promt For Gemini' />
                    <div>
                        <MdOutlineAddPhotoAlternate/>
                        <FaMicrophone/>
                        <IoIosSend/>
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your pirvacy and Gemini Apps.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
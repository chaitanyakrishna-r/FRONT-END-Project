import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { IoCompassOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Context } from '../../context/Context';




const Main = () => {

    const {onSent,recentPrompt,showResult, resultData, setInput, input,loading} = useContext(Context);

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.geminiLogo} alt="" />
        </div>
        <div className="main-container">
            {showResult
            ?<div className='result'>
                <div className="result-title">
                    <div className="user-icon"> </div>
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.geminiLogo} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                   
                    
                </div>
               
            </div>
            :<>
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

            </>}
          
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>{setInput(e.target.value)}} 
                    value={input}
                    type="text" placeholder='Enter a Promt For Gemini' />
                    <div>
                        <MdOutlineAddPhotoAlternate/>
                        <FaMicrophone/>
                        <IoIosSend onClick={()=>{onSent()}}/>
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
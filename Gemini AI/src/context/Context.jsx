import { createContext, useState } from "react";
import run from "../config/gemini";


export const Context = createContext();

const ContestProvider = (props)=>{
    const [input,setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPromots,setPrevPromots] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData,setResultData] = useState("");

    const delayPara = (index,nextWord)=>{
        setTimeout(() => {
            setResultData(prev=>prev + nextWord + " ");
        }, 75*index);
    }

    const onSent = async()=>{

        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
       const response = await run(input);
       let responseArray = response.split("**");
       let newResponse="";
       for(let i=0; i<responseArray.length; i++){
        if(i===0 || i%2 !== 1){
            newResponse += responseArray[i];
        }
        else{
            newResponse += "<b>"+responseArray[i]+"</b>";
        }
       }
       let finalResponse = newResponse.split("*").join("</br>");
       let finalResponseArray = finalResponse.split(" ");
       for(let i=0; i<finalResponseArray.length; i++){
            const nextWord = finalResponseArray[i];
            delayPara(i,nextWord);
       }
      
        setInput("");
        setLoading(false);
    }
    
    const contestValue = {
        prevPromots,
        setPrevPromots,
        onSent,
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData
    }
    return(
        <Context.Provider value={contestValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContestProvider;
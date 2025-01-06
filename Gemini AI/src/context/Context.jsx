import { createContext } from "react";
import run from "../config/gemini";


export const Context = createContext();

const ContestProvider = (props)=>{
    const onSent = async(prompt)=>{
        await run(prompt);
    }
    const prompt = "what is chess";
    onSent(prompt);
    const contestValue = {

    }
    return(
        <Context.Provider value={contestValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContestProvider;
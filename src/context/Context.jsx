
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import run from '../config/gemini.js';

export const Context = createContext();


const ContextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [previousPrompt,setPreviousPrompt] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");

    const delayPara = (index,nextWord) => {
        setTimeout(function () {
            setResultData(prev=>prev+nextWord);

        },75*index);
    }
    
    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }
    const onSend = async (prompt) => {
        setResultData("");
        setShowResult(true);
        setLoading(true);
        let response = null;
        setInput("");
        if(prompt !== undefined){
            setRecentPrompt(prompt);
            response = await run(prompt);

        }
        else{

            setRecentPrompt(input);
            setPreviousPrompt((prev) => [...prev, input]);
            response = await run(input);
        }
        
        let responseArray = response.split("**");
        let newResponse = "";
        for(let i = 0;i<responseArray.length;i++){
            if(i % 2 == 0){
                newResponse += responseArray[i];
            }
            else{
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>");
        
        let newResponseArray = newResponse2.split(" ");

        // for(let i = 0;i<newResponseArray.length;i++){
        //     const nextWord = newResponseArray[i];
        //     delayPara(i,nextWord + " ");
        // }
        setResultData(newResponse2);
        setLoading(false);
    }


    const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        onSend,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
        
    }

    return (
        <Context.Provider  value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;
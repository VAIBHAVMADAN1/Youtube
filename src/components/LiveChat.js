import React, { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'

import { addMessage } from '../utils/chatSlice'
import { generateRandomName } from '../utils/helper';

function getRandomString(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}


const LiveChat = () => {
    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.messages)
    useEffect(()=>{
        const i = setInterval(()=>{
        // API polling
        console.log("API polling")
        dispatch(addMessage({
            name: generateRandomName(),
            text: getRandomString(20)
        }))
        },1500)

        

        return ()=> clearInterval(i);
    })

    const liveMessage = useRef("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addMessage({
            name: "Vaibhav the Great",
            text: liveMessage.current.value
        }))
        liveMessage.current.value = "";
    }
  return (
    <>
    <div className="overflow-y-scroll ml-2 w-full h-[400px] border border-black border-solid bg-slate-100 flex flex-col-reverse">
        <div>
          {chatMessages.map(c => <ChatMessage name={c.name} message={c.text} />)}
        </div>
    </div>
    <form onSubmit={e => handleSubmit(e)}>
        <input ref={liveMessage} className="ml-2 mt-2 border border-black w-2/3"/>
        <button className="border border-black bg-green-300 px-2">Send</button>
    </form>
    </>
  )
}

export default LiveChat
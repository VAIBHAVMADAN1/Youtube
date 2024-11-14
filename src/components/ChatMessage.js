import React from 'react'

import user_icon from "../assets/user.png"

const ChatMessage = ({name,message}) => {
    return (
        <div className="flex border-b-2">
            <img className="h-8"
                src={user_icon} alt="User" />
            <span className="font-bold">{name}</span>
            <span> - {message}</span>
        </div>
    )
}

export default ChatMessage
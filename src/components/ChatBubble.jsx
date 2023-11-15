import React, { useEffect, useState } from "react";
import { profileStore } from "../store/profile";


const ChatBubble = ({comment}) => {
    const [sameAuthor, setSameAuthor] = useState(false)
    const profile = profileStore(state => state.profile)
    useEffect(() => {
        if (comment.author == profile.username) {
            setSameAuthor(true)
        }
    }, [profile.username])
    return (
        <div className={sameAuthor ? "chat chat-end": "chat chat-start"}>
            <div className="chat-header">
            {comment.author}
            <time className="text-xs opacity-75 ml-1">12:45</time>
            </div>
            <div className="chat-bubble">{comment.text}</div>
            {/* <div className="chat-footer opacity-50">
            Delivered
            </div> */}
        </div>
    )
}

export default ChatBubble;
import React from "react";
import { NewMessageInput } from "./NewMessageInput";
import { Messages } from "./Messages";

export const Chat = ({ channelId }) =>{
    return(
        <div className="chat-section">
            <div className="chat-title-container">
                <span className="chat-title-text">Stream chat </span>
            </div>
            <Messages messages={[]} />
            <NewMessageInput sendMessage={()=>{}}/>
        </div>
    )
}
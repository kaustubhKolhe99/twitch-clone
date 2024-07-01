import React from "react";
import { NewMessageInput } from "./NewMessageInput";
import { Messages } from "./Messages";
import { useChatHistory } from "../../../../../shared/hooks";

export const Chat = ({ channelId }) =>{
    const { sendMessage, messages } = useChatHistory(channelId);

    return(
        <div className="chat-section">
            <div className="chat-title-container">
                <span className="chat-title-text">Stream chat </span>
            </div>
            <Messages messages={messages} />
            <NewMessageInput sendMessage={sendMessage}/>
        </div>
    );
};
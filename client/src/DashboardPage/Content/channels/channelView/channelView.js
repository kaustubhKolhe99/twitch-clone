import React from "react";
import { Chat } from './chat';
import { ChannelDescription } from "./channelDescription";

const ChannelDetails = {
    id:1,
    title: "Gaming channel",
    description: 'playing call of duty mw3',
    username: 'gamer',
    isOnline: false,
}
export const ChannelView = () =>{
    return(
        <div className="channel-container">
            <div className="channel-video-description-section">
                <div className="channel-offline-placeholder">
                    <span>Channel is offline</span>
                </div>

                <ChannelDescription
                    channelId= {ChannelDetails.id}
                    title= {ChannelDetails.title}
                    description= { ChannelDetails.description}
                    username= {ChannelDetails.username}
                />
            </div>
            <Chat/>
        </div>
    )
}
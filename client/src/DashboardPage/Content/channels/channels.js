import React from "react";
import { ChannelCard } from "./channelCard";


export const Channels = ({ channels }) => {
    console.log( channels )
    return(
        <div className="channels-container">
            {channels.map( (c) => { 
                return(<ChannelCard
                    key={ c.id }
                    title={ c.title }
                    username={ c.username }
                    isOnline={ c.isOnline }
                    avatarUrl={ c.avatarUrl }
                    navigateToChannelHandler={ ()=>{} }
                />)
            })}
            
        </div>
    )

    
};
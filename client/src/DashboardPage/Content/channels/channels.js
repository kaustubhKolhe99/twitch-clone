import React from "react";
import { ChannelCard } from "./channelCard";

export const dummyChannels = [
    {
        id: 1,
        title:"title1",
        avatarUrl: null,
        isOnline: true,
        username: "user1",
    },
    {
        id: 2,
        title:"title2",
        avatarUrl: null,
        isOnline: false,
        username: "user2",
    },
    {
        id: 3,
        title:"title3",
        avatarUrl: null,
        isOnline: false,
        username: "user3",
    },
    {
        id: 4,
        title:"title4",
        avatarUrl: null,
        isOnline: true,
        username: "user4",
    },
]

export const Channels = () => {
    return(
        <div className="channels-container">
            {dummyChannels.map( (c) => { 
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
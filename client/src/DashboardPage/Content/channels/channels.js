import React from "react";
import { ChannelCard } from "./channelCard";
import { useNavigate } from 'react-router-dom'

export const Channels = ({ channels }) => {
    
    const navigate = useNavigate();
    
    const handleNavigateToChannel = (id) =>{
        navigate(`/channel/${id}`)
    }

    return(
        <div className="channels-container">
            {channels.map( (c) => { 
                return(<ChannelCard
                    key={ c.id }
                    id={ c.id }
                    title={ c.title }
                    username={ c.username }
                    isOnline={ c.isOnline }
                    avatarUrl={ c.avatarUrl }
                    navigateToChannelHandler={ handleNavigateToChannel }
                />)
            })}
            
        </div>
    )

    
};
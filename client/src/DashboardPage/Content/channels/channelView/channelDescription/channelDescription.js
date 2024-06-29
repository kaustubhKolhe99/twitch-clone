import React from "react";
import { useUserDetails, useFollowChannel } from "../../../../../shared/hooks";

const FollowedButton = ({ channelId }) =>{
    const { followChannel } = useFollowChannel();

    const handleFollowChannel = () =>{
        followChannel(channelId)
    }
    return <button 
        className="channel-follow-button"
        onClick={ handleFollowChannel }
    >
        Follow
    </button>
}
export const ChannelDescription = ({ 
    username, 
    title, 
    description, 
    channelId
}) =>{

    const {isLogged} = useUserDetails();
    return(

        <div className="channel-description-container ">
            <span className="channel-description-title">
                { username }
                <span>
                    {isLogged && (<FollowedButton 
                        className='channel-follow-button'
                        channelId={channelId}
                    />)}
                </span>    
            </span>
            <span className="channel-description-subtitle">{ title }</span>
            
            <div className="channel-description-box">
                <span className="channel-description">{description}</span>
            </div>
        </div>
    )
}
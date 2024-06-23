import React from "react";

//dummy default avatarUrl for a channel
const imageUrl = "https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw3/meta/reveal/jpt-reveal-meta.jpg"

const ChannelAvatar = ({ url }) => {
    return (
        <div className="channel-avatar-container">
            <img src={ url || imageUrl} width="100%" height="100%"/>
        </div>
    );
};

export const ChannelCard = ({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler,

}) =>{

    const handlerNavigate = () =>{
        navigateToChannelHandler();
    }

    return(
        <div className="channels-card" onClick={handlerNavigate}>
            <ChannelAvatar url={ avatarUrl } />
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-text">{username}</span>
            <span className="channels-card-text "
                style={{ color: isOnline? "green" : "red" }}>
                {isOnline ? "Online" : "Offline"}
            </span>
        </div>
    )
}
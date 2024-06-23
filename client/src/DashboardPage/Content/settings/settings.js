import React from "react";
import { StreamKey } from "./StreamKey";
import { ChannelSettings } from "./ChannelSettings";


const channelSettings = {
    title: 'title1',
    description: 'description',
    avatarUrl: 'none',
    username: 'martin',
    streamKey: '1234',
}

export const Settings = () => {
    return(
        <div className="settings-container">
            <span>Settings</span>
            <ChannelSettings settings={channelSettings}/>
            <StreamKey streamKey={ channelSettings.streamKey } />
            
        </div>
    )
}
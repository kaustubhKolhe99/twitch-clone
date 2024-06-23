import React from "react";
import { StreamKey } from "./StreamKey";
import { ChannelSettings } from "./ChannelSettings";
import { PasswordSettings } from "./PasswordSettings";
import { useChannelSettings } from "../../../shared/hooks";
import { LoadingSpinner } from '../../../shared/components'


export const Settings = () => {
    const { channelSettings, isFetching } = useChannelSettings; 

    if(isFetching){
        return <LoadingSpinner/>;
    }
    
    if(!channelSettings){
        return(
            <span>
                Fetching the data 
            </span>
        )
    }
    return(
        <div className="settings-container">
            <span>Settings</span>
            <ChannelSettings settings={ channelSettings } />
            <PasswordSettings/>
            <StreamKey streamKey={ channelSettings.streamKey } />
        </div>
    )
}
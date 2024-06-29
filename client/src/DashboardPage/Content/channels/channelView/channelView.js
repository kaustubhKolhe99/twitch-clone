import React, { useEffect } from "react";
import { Chat } from './chat';
import { ChannelDescription } from "./channelDescription";
import { useChannelDetails } from "../../../../shared/hooks";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../../../../shared/components";
import { ReactFlvPlayer } from 'react-flv-player'

export const Stream = () =>{
    return <div className="channel-video-container">
        <ReactFlvPlayer
            width="100%"
            height="100%"
            url="http://localhost:8000/live/7f1b0fc6-85cf-47e3-bcda-4ed456759f63.flv"/>

    </div>
}
export const ChannelView = ({getChannels}) =>{
    const { isFetching, getChannelDetails, channelDetails  } = useChannelDetails();

    const { id } = useParams();

    useEffect(()=>{
        getChannelDetails(id)
    },[])

    if(isFetching){
        return <LoadingSpinner/>
    }

    return(
        <div className="channel-container">
            <div className="channel-video-description-section">
                {/* <div className="channel-offline-placeholder">
                    <span>Channel is offline</span>
                </div> */}
                <Stream/>

                <ChannelDescription
                    channelId= {channelDetails.id}
                    title= {channelDetails.title}
                    description= { channelDetails.description}
                    username= {channelDetails.username}
                    getChannels={ getChannels }
                />
            </div>
            <Chat/>
        </div>
    )
}
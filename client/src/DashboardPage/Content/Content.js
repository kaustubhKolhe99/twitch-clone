import React from "react";
import { Route, Routes } from "react-router-dom";
import { Channels } from "./channels";
import { ChannelView } from "./channels/channelView";
import { Settings } from "./settings";


export const Content = ({ channels, getChannels }) =>{
    return(
        <div className="content-container">
            <Routes>
                <Route path="settings" element={ <Settings/> } />
                <Route path="channels" element={ <Channels channels={ channels }/> } />
                <Route path="channel/:id" element={ <ChannelView getChannels={getChannels}/> } />
            </Routes>
        </div>
    );
};
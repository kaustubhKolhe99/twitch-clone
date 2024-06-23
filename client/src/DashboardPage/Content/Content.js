import React from "react";
import { Route, Routes } from "react-router-dom";
import { Channels } from "./channels";
import { ChannelView } from "./channels/channelView";
import { Settings } from "./settings";


export const Content = () =>{
    return(
        <div className="content-container">
            <Routes>
                <Route path="settings" element={ <Settings/> } />
                <Route path="channels" element={ <Channels/> } />
                <Route path="channels/:id" element={ <ChannelView/> } />
            </Routes>
        </div>
    );
};
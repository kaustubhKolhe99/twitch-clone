import React from "react";

const FollowedChannels = [
    {
        id:1,
        username:"martin",
        isOnline:false,
    },
    {
        id:2,
        username:"martin",
        isOnline:false,
    },
    {
        id:3,
        username:"martin",
        isOnline:true,
    },
]
export const Sidebar = () =>{
    return( 
        <div className="sidebar-container">
            <span className="sidebar-title">for you</span>
            <span className="sidebar-subtitle">Followed Channels</span>
            {FollowedChannels.map(c=>{
                return(
                <div key={c.id} className="sidebar-list-item">
                    <span className="sidebar-list-username">{c.username}</span>
                    <span 
                        className="sidebar-list-status"
                        style={{
                            color: c.isOnline ? "green" : "red"
                            }
                        }>{c.isOnline ? "Online": "Offline"}</span>
                </div>)
            })}
        </div>
    );
}
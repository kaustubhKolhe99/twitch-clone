import React from "react";


export const Sidebar = ({ channels }) =>{

    if(!channels){
        return null;
    }
    return( 
        <div className="sidebar-container">
            <span className="sidebar-title">for you</span>
            <span className="sidebar-subtitle">Followed Channels</span>
            {channels?.map(c=>{
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
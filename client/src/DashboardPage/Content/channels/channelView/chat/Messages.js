import React from "react";

const Message = ({ author, content }) => {
    return(
        <span className="chat-messages-message">
            <span style={{fontWeight: 'bold'}}> { author} </span>
            {content}
        </span>
    )
}
export const Messages = ({ messages }) => {
    return(
        <div className="chat-messages-container">
            {
                messages.map(message => {
                    return(<Message 
                        key={message.key}
                        author={message.author}
                        content={message.content} />)
                })
            }
        </div>
    )
}
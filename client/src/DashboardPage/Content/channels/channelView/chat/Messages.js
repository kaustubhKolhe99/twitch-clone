import React from "react";

const messages = [
    {
        author: 'john',
        content: 'hello world',
        id: 1,
    },    {
        author: 'john',
        content: 'hello world',
        id:2, 
    },    {
        author: 'john',
        content: 'hello world',
        id: 3,
    },    {
        author: 'john',
        content: 'hello world',
        id: 4,
    },
]

const Message = ({ author, content }) => {
    return(
        <span className="chat-messages-message">
            <span style={{fontWeight: 'bold'}}> { author} </span>
            {content}
        </span>
    )
}
export const Messages = () => {
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
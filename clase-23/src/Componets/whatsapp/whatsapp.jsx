import React from "react";
import "./whatsapp.css"


const Chat = ({ data }) => {

    return (
        <div className="chat">
            <div className="day">
                <span> JUEVES </span></div>
            {data.map(({ id, author, content, date, state }) => (
                <div className={`row ${author === "yo" ? "sent" : "received"}`}
                    key={id}>

                    <div className="chat-container">

                        <div className="header">{author}</div>
                        <div className="content">{content}</div>
                        <div className="footer">{date}<span className={state === "visto" && "blue"}>&#10003;&#10003;</span></div> 
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Chat
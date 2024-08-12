import { React, useState, useRef, } from "react";
import "./Chat.css"
import Header from "../Header/Header.jsx";


const Chat = ({ data }) => {
    const [message, setMessage] = useState("");
    const [contactData, setContactData] = useState(data);
    const inputRef = useRef();
    const lastMessageRef = useRef();

    const Color = contactData.color
    const Back = contactData.backgroundColor

    function handleSubmit(e) {
        e.preventDefault();

        if (!message) return;

        const newMessage = {
            author: "Yo",
            content: message,
            date: "ahora",
            state: "visto",
            id: crypto.randomUUID(),
        };

        setContactData({
            ...contactData,
            chatHistory: [...contactData.chatHistory, newMessage],
        });
        setMessage("");
    }

    function handleMessageChanged(e) {
        setMessage(e.target.value);
    }
    return (
        <div className="container">
<div className="chat" style={{ backgroundColor: Back }}>
            <Header contactData={contactData} />
            <div>
                <div className="day" style={{ backgroundColor: contactData.color }}>
                    <span> {contactData.chatHistory[0].date} </span></div>
                {contactData.chatHistory.map(({ id, author, content, date, state }) => (
                    <div
                        className={`row ${author === "Yo" ? "sent" : "received"}`}
                        key={id}
                        ref={lastMessageRef}
                    >
                        <div className="chat-container" style={{ backgroundColor: Color }}>
                            <div className="author">{author}</div>
                            <div className="content">{content}</div>
                            <div className="footer">{date}<span className={state === "visto" && "blue"}>&#10003;&#10003;</span></div>
                        </div>
                    </div>

                ))}
            </div>
            <div className="form-container" style={{ backgroundColor: Back }}>
                <form className="form" onSubmit={(e) => handleSubmit(e, message)}>
                    <i className="bi bi-plus-lg"></i>
                    <input
                        className="input"
                        type="text"
                        onChange={handleMessageChanged}
                        value={message}
                        ref={inputRef}
                        placeholder=""
                        style={{ backgroundColor: Color }}
                    />
                    <button type="submit" style={{ backgroundColor: Back}} > <i class="bi bi-send-fill"></i></button>
                    <div className="bottom-icons">
                        <i className="bi bi-camera"></i>
                        <i className="bi bi-mic"></i>
                    </div>
                </form>
            </div>
        </div>

        </div>
        
    );
};

export default Chat


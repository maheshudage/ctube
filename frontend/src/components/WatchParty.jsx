import React, { useState } from "react";
import "./watchparty.css";

const WatchParty = () => {
  const [activeTab, setActiveTab] = useState("chat");
  const [messages, setMessages] = useState([
    { text: "They are preparing for another stunt I think!", color: "yellow" },
    { text: "Is he going to fall from the top of the plane??", color: "pink" },
    { text: "This is so funny!", color: "grey" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, color: "grey" }]);
    setInput("");
  };

  return (
    <div className="main-container">

      {/* Tabs */}
      <div className="tabs">
        <button className={`tab-btn ${activeTab==="chat"?"active":""}`} onClick={()=>setActiveTab("chat")}>
          <img src="/icons/chat.png" />
        </button>
        <button className={`tab-btn ${activeTab==="video"?"active":""}`} onClick={()=>setActiveTab("video")}>
          <img src="/icons/video.png" />
        </button>
        <button className={`tab-btn ${activeTab==="people"?"active":""}`} onClick={()=>setActiveTab("people")}>
          <img src="/icons/participants.png" />
        </button>
      </div>

      {/* CHAT */}
      {activeTab === "chat" && (
        <div className="tab-content show">
          <div className="content-body chat-body">
            {messages.map((msg, i) => (
              <div className="msg" key={i}>
                <span className={`avatar ${msg.color}`}></span>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="input-area">
            <input
              placeholder="Type your message ..."
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              onKeyDown={(e)=>e.key==="Enter" && sendMessage()}
            />
            <button className="send-btn" onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}

      {/* VIDEO */}
      {activeTab === "video" && (
        <div className="tab-content show">

          <div className="upnext">Up Next ...</div>

          <div className="content-body">
            {[1,2,3,4].map((item)=>(
              <div className="video-item" key={item}>
                
                <div className="thumb"></div>

                <div className="video-info">
                  <h4>Title of the video</h4>
                  <p>Channel Name</p>
                  <span>7,382 views • 2 years ago</span>
                </div>

                <span className="remove">×</span>

              </div>
            ))}
          </div>

          <div className="input-area">
            <input placeholder="Click here to add video link into the queue..." />
          </div>
        </div>
      )}

      {/* PEOPLE */}
      {activeTab === "people" && (
        <div className="tab-content show">
          <div className="content-body">
            {["grey","pink","yellow","blue"].map((c,i)=>(
              <div className="person" key={i}>
                <span className={`avatar ${c}`}></span>
                Person {i+1}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default WatchParty;
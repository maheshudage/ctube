import React from "react";

const ChatSection = () => {
  return (
    <div className="chat-section">
      
      <div className="chat-header">Chat</div>

      <div className="chat-messages">
        <p>🙂 This is funny!</p>
        <p>🔥 Amazing scene</p>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <button>➤</button>
      </div>

    </div>
  );
};

export default ChatSection;
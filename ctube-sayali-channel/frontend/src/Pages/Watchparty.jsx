import React from "react";
import "./watchparty.css";

const WatchParty = () => {
  return (
    <div className="watchparty-container">

      {/* LEFT - VIDEO */}
      <div className="video-section">
        <div className="video-player"></div>

        <h3 className="video-title">
          Title of the video uploaded by the channel
        </h3>

        <div className="channel-row">
          <div className="channel-info">
            <div className="avatar"></div>
            <div>
              <p>Channel Name</p>
              <span>1.3M Subscribers</span>
            </div>
          </div>

          <button className="subscribe-btn">Subscribe</button>
        </div>

        <div className="description-box"></div>
      </div>

      {/* CHAT */}
      <div className="chat-section">
        <h4>Chat</h4>
        <div className="chat-box">
          <p>💬 This is so funny 😂</p>
          <p>🔥 Amazing video!</p>
        </div>
        <input placeholder="Type your message..." />
      </div>

      {/* QUEUE */}
      <div className="queue-section">
        <h4>Up Next</h4>

        {[1,2,3,4].map((item) => (
          <div className="queue-item" key={item}>
            <div className="thumb"></div>
            <div>
              <p>Title of the video</p>
              <span>Channel Name</span>
            </div>
          </div>
        ))}
      </div>

      {/* USERS */}
      <div className="users-section">
        <h4>Users</h4>

        {["Person 1", "Person 2", "Person 3"].map((user, i) => (
          <div className="user-item" key={i}>
            <div className="user-avatar"></div>
            <p>{user}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default WatchParty;
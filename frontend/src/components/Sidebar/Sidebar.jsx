import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="sidebar-item">🏠 <span>Home</span></div>
      <div className="sidebar-item">📺 <span>Subscriptions</span></div>
      <div className="sidebar-item">🕒 <span>History</span></div>
      <div className="sidebar-item">⏰ <span>Watch Later</span></div>
      <div className="sidebar-item">👍 <span>Liked Videos</span></div>

      {/* Divider */}
      <hr />

      {/* Subscriptions List */}
      <div className="sidebar-sub">Subscriptions</div>

      {[1,2,3,4,5,6].map((item) => (
        <div className="sidebar-channel" key={item}>
          <div className="channel-img"></div>
          <span>Channel Name</span>
        </div>
      ))}

      <div className="show-more">Show More ➤</div>

    </div>
  );
};

export default Sidebar;
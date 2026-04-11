import React from "react";
import Navbar from "../components/Navbar/Navbar";
import VideoCard from "../components/VideoCard";
import Sidebar from "../components/Sidebar/Sidebar";
import Channel from "../components/Channel";


// import "./Channel.css";   // ✅ CSS connected

const channelBanner =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1400&h=400&fit=crop";

const channelAvatar =
  "https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=300&h=300&fit=crop";

const videos = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  title: "Title of the video",
  channel: "Channel Name",
  views: "7,382 views",
  time: "2 years ago",
  duration: "7:32",
}));

const Channel = () => {
  return (
    <div className="channel-page">
      <Navbar />
      <Sidebar />
      <Channel />
          
          {/* Banner */}
          <div className="channel-banner">
            <img src={channelBanner} alt="Channel Banner" />

            <button className="edit-btn">
              <img src="/icons/edit.png" alt="Edit" />
            </button>
          </div>

          {/* Channel Info */}
          <div className="channel-info">
            <img
              src={channelAvatar}
              alt="Channel Avatar"
              className="channel-avatar"
            />

            <div className="channel-details">
              <h1>CHANNEL NAME</h1>
              <p>1,432 Subscribers</p>

              <button className="subscribe-btn">
                Subscribe
              </button>
            </div>

            <p className="channel-desc">
              This is the description of the channel which the user will be
              seeing, user can edit this and customize it according to their
              needs.
            </p>
          </div>

          {/* Videos Grid */}
          <div className="video-section">
            <div className="video-grid">
              {videos.map((v) => (
                <VideoCard key={v.id} {...v} />
              ))}
            </div>
          </div>

    </div>
  );
};

export default Channel;
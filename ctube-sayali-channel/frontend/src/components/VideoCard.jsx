import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <div className="thumbnail"></div>

      <h3>{video?.title || "Video Title"}</h3>
      <p>{video?.channel || "Channel Name"}</p>
    </div>
  );
};

export default VideoCard;
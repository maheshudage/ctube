import React from "react";

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <img src={video?.thumbnail} alt="thumbnail" />
      <h3>{video?.title}</h3>
    </div>
  );
}

export default VideoCard;
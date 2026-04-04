import React from "react";

const VideoSection = () => {
  return (
    <div className="video-section">
      
      <div className="video-player"></div>

      <h3 className="video-title">
        Title of the video uploaded by the channel
      </h3>

      <div className="video-info">
        <div className="channel">
          <div className="avatar"></div>
          <div>
            <p>Channel Name</p>
            <span>1.3M Subscribers</span>
          </div>
        </div>

        <button className="subscribe-btn">Subscribe</button>
        <button className="like-btn">Like</button>
      </div>

      <div className="description"></div>

      <div className="comments">
        <h4>Comments</h4>

        <div className="comment-box"></div>

        <div className="comment">
          <div className="avatar"></div>
          <p>This is a comment</p>
        </div>
      </div>

    </div>
  );
};

export default VideoSection;
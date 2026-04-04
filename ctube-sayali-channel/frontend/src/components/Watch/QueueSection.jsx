import React from "react";

const QueueSection = () => {
  return (
    <div className="queue-section">
      
      <h4>Up Next</h4>

      {[1,2,3,4].map((item) => (
        <div className="queue-item" key={item}>
          <div className="thumbnail"></div>
          <div>
            <p>Title of the video</p>
            <span>Channel Name</span>
          </div>
        </div>
      ))}

    </div>
  );
};

export default QueueSection;
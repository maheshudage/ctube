import React from "react";

const AddVideo = () => {
  return (
    <div className="add-video">
      
      <input 
        type="text" 
        placeholder="Search or paste video link..." 
      />

      {[1,2,3].map((item) => (
        <div className="search-item" key={item}>
          <div className="thumbnail"></div>

          <div>
            <p>Title of the video</p>
            <span>Channel Name</span>
          </div>

          <button>Add</button>
        </div>
      ))}

    </div>
  );
};

export default AddVideo;
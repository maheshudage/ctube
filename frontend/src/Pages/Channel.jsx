import React from "react";

const Channel = () => {
  return (
    <div>

      
      <div
        style={{
          background: "#111",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2>CHANNEL NAME</h2>
        <p style={{ color: "#aaa" }}>1,432 Subscribers</p>
        <button
          style={{
            marginTop: "10px",
            padding: "8px 15px",
            background: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </div>

      {/* VIDEOS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item}>
            
            {/* Thumbnail */}
            <div
              style={{
                width: "100%",
                height: "140px",
                background: "#333",
                borderRadius: "10px",
              }}
            ></div>

            {/* Title */}
            <p style={{ marginTop: "8px", fontWeight: "bold" }}>
              Title of the video
            </p>
            <span style={{ fontSize: "12px", color: "#aaa" }}>
              Channel Name
            </span>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Channel;
import React from "react";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>

      <div style={styles.item}> Home</div>
      <div style={styles.item}> Subscriptions</div>
      <div style={styles.item}> History</div>
      <div style={styles.item}> Watch later</div>
      <div style={styles.item}> Liked videos</div>

      

    </div>
  );
};

const styles = {
  sidebar: {
  width: "240px",
  background: "#0b0b0b",
  color: "white",
  height: "100vh",   
  position: "fixed",
  top: "60px",      
  left: 0,
  padding: "10px",
  overflow: "hidden", 
  },

  item: {
    background: "#2a2a2a",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
  },

  title: {
    marginTop: "20px",
    color: "gray",
  },

  channel: {
    marginTop: "10px",
  },
};

export default Sidebar;
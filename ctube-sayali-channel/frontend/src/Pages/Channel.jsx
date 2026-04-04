import React from "react";

const Channel = () => {
  return (
    <div style={styles.container}>

      
      <div style={styles.bannerWrapper}>
        <img src="/banner.jpg" alt="banner" style={styles.banner} />
      </div>

      
      <div style={styles.header}>
        <img src="/spiderman.png" alt="profile" style={styles.profile} />

        <div style={styles.info}>
          <h1 style={styles.title}>CHANNEL NAME</h1>
          <p style={styles.subs}>1,432 Subscribers</p>
          <button style={styles.button}>Subscribe</button>
        </div>
      </div>

      
      <div style={styles.grid}>
        {[1,2,3,4,5,6].map((item) => (
          <div key={item}>
            <div style={styles.card}></div>
            <h4 style={styles.videoTitle}>Title of the video</h4>
            <p style={styles.channelName}>Channel Name</p>
          </div>
        ))}
      </div>

    </div>
  );
};

const styles = {
  container: {
    marginLeft: "260px",
    marginTop: "70px",
    padding: "20px",
    color: "white",
  },

  
  bannerWrapper: {
    width: "100%",
    height: "220px",
    overflow: "hidden",
    borderRadius: "12px",
  },

  banner: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginTop: "-60px",  
    paddingLeft: "20px",
  },

  profile: {
    width: "120px",
    height: "120px",
    borderRadius: "12px",
    objectFit: "cover",
    border: "4px solid black",
    background: "#222",
  },

  info: {
    marginTop: "50px",
  },

  title: {
    fontSize: "28px",
    margin: 0,
  },

  subs: {
    color: "gray",
    margin: "5px 0",
  },

  button: {
    padding: "10px 20px",
    background: "#e6e6e6",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "40px",
  },

  card: {
    height: "150px",
    background: "#333",
    borderRadius: "10px",
  },

  videoTitle: {
    fontSize: "14px",
    marginTop: "8px",
  },

  channelName: {
    fontSize: "12px",
    color: "gray",
  },
};

export default Channel;
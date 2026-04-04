import React from "react";
import logo from "../assets/logo2.png"; 
const Navbar = () => {
  return (
    <div style={styles.navbar}>

      
      <div style={styles.left}>
        <div style={styles.menu}>☰</div>

        
        <img src={logo} alt="logo" style={styles.logo} />
      </div>

      
      <div style={styles.center}>
        <div style={styles.searchBox}>
          <input
            placeholder="Type something ..."
            style={styles.input}
          />
          <div style={styles.searchBtn}></div>
          <div style={styles.searchBtn}></div>
        </div>
      </div>

      
      <div style={styles.right}>
        <div style={styles.icon}></div>
        <div style={styles.icon}></div>
        <div style={styles.icon}></div>

        <div style={styles.profile}>
          User <br /> Profile
        </div>
      </div>

    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#0b0b0b",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  menu: {
    fontSize: "24px",
    color: "white",
  },

  logo: {
  height: "55px",  
  objectFit: "contain",
},

  center: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    background: "#111",
    border: "1px solid #333",
    borderRadius: "25px",
    overflow: "hidden",
    width: "450px",
  },

  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    outline: "none",
    background: "transparent",
    color: "white",
  },

  searchBtn: {
    padding: "10px",
    background: "#e6e6e6",
    cursor: "pointer",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  icon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#e6e6e6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  profile: {
    background: "#e6e6e6",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    textAlign: "center",
  },
};

export default Navbar;
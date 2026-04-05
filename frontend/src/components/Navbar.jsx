import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <span className="menu-icon">☰</span>
        <h2 className="logo">CTube</h2>
      </div>

      {/* CENTER */}
      <div className="nav-center">
        <input type="text" placeholder="Search" />
        <button>🔍</button>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <div className="icon-group">
          <span>🎥</span>
          <span>🔔</span>
          <span>👤</span>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
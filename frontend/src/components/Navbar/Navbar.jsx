import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="navbar">

      <div className="left">
        <div className="menu">
          <img src="/icons/hamburger.png" alt="menu" />
        </div>

        <div className="logo">
          <div className="circle">
            <img src="/logo/Circle.png" alt="ctube" />
          </div>
          <span>C TUBE</span>
        </div>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Type something..." />

        <button className="search-btn">
          <img src="/icons/search.png" alt="search" />
        </button>

        <button className="mic-btn">
          <img src="/icons/microphone-black-shape.png" alt="mic" />
        </button>
      </div>

      <div className="right">
        <div className="icon">
          <img src="/icons/video-camera.png" alt="video" />
        </div>

        <div className="icon">
          <img src="/icons/bell.png" alt="bell" />
        </div>

        <div 
          className="profile"
          onClick={() => setShowProfile(!showProfile)}
        >
          User<br />Profile
        </div>
      </div>

      {showProfile && (
        <div className="profile-dropdown">

          {/* <div className="profile-circle"></div> */}

          <div className="card">

            <div className="item">
              <img src="../icons/user.png" alt="User" className="item-icon" />
              <span>View Channel</span>
            </div>

            <div className="item">
              <img src="../icons/edit.png" alt="edit" className="item-icon" />
              <span>Customize Profile</span>
            </div>

            <div className="item">
              <img src="../icons/logout.png" alt="logout" className="item-icon" />
              <span>Sign Out</span>
            </div>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;
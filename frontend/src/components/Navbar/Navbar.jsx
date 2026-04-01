import "./Navbar.css";

function Navbar() {
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

        <div className="profile">
          User<br />Profile
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
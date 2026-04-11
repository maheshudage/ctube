import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const HomePage = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">

        {/* LEFT */}
        <div className="left">
          <div className="menu">
            <img src="/icons/hamburger.png" alt="" />
          </div>

          <div className="logo">
            <div className="circle">
              <img src="/logo/Circle.png" alt="ctube" />
            </div>
            <span>C TUBE</span>
          </div>
        </div>

        {/* SEARCH */}
        <div className="search-box">
          <input type="text" placeholder="Type something..." />

          <button className="search-btn">
            <img src="/icons/search.png" alt="" />
          </button>

          <button className="mic-btn">
            <img src="/icons/microphone-black-shape.png" alt="" />
          </button>
        </div>

        {/* RIGHT */}
        <div className="right">
          <div className="icon">
            <img src="/icons/video-camera.png" alt="" />
          </div>

          <div className="icon">
            <img src="/icons/bell.png" alt="" />
          </div>

          <div className="profile">
            <Link to="/profile">
                User<br />Profile
            </Link>
          </div>

          
        </div>
      </nav>

      {/* SIDEBAR */}
      <div className="sidebar">

        {/* Menu */}
        <div className="menu">
          <div className="menu-item">
            <span className="icon">
              <img src="/icons/home.png" alt="Home" />
            </span>
            <span>Home</span>
          </div>

          <div className="menu-item">
            <span className="icon">
              <img src="/icons/subscriptions.png" alt="Subscriptions" />
            </span>
            <span>Subscriptions</span>
          </div>
        </div>

        <div className="menu">
          <div className="menu-item">
            <span className="icon">
              <img src="/icons/history.png" alt="History" />
            </span>
            <span>History</span>
          </div>

          <div className="menu-item">
            <span className="icon">
              <img src="/icons/clock.png" alt="Watch later" />
            </span>
            <span>Watch later</span>
          </div>

          <div className="menu-item">
            <span className="icon">
              <img src="/icons/like.png" alt="Liked videos" />
            </span>
            <span>Liked videos</span>
          </div>
        </div>

        {/* Subscriptions */}
        {/* <div className="subscriptions">
          <h4>Subscriptions</h4> */}

          {/* {[...Array(8)].map((_, i) => (
            <div className="channel" key={i}>
              <div className="circle"></div> Channel Name
            </div>
          ))} */}

          {/* <div className="show-more">
            Show More <span>›</span>
          </div> */}
        {/* </div> */}
      </div>

      {/* MAIN CONTENT */}
      <div className="main">
        <div className="grid">

          {[...Array(6)].map((_, i) => (
            <div className="card" key={i}>
              <div className="thumb">
                <span className="time">7:32</span>
              </div>

              <div className="card-info">
                <div className="avatar"></div>

                <div>
                  <h4>Title of the video uploaded by this channel</h4>
                  <p>Channel Name</p>
                  {/* <span>7,343 views • 2 Months ago</span> */}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default HomePage;
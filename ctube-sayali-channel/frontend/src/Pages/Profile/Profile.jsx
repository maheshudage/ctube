import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="container">
      <div className="card">

        <div className="profile-pic"></div>

        <h2>John David</h2>
        <div className="joined">Joined: 18/11/2023</div>

        <div className="input-group">
          <input type="text" placeholder="User Name" />
          <img src="/icons/logout.png" alt="icon" className="icon" />
        </div>

        <div className="input-group">
          <input type="email" placeholder="Email" />
          <img src="/icons/logout.png" alt="icon" className="icon" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Enter current password" />
          <img src="/icons/logout.png" alt="icon" className="icon" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Enter new password" />
          <img src="/icons/logout.png" alt="icon" className="icon" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Confirm new password" />
          <img src="/icons/logout.png" alt="icon" className="icon" />
        </div>

        <button className="btn">Save</button>

      </div>
    </div>
  );
};

export default Profile;
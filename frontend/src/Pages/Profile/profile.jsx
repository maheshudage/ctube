import { useEffect, useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedName = localStorage.getItem("userName");

    if (storedEmail) setEmail(storedEmail);
    if (storedName) setName(storedName);
  }, []);

  return (
    <div className="container">
      <div className="card">

        <div className="profile-pic"></div>

        <h2>{name || "User Name"}</h2>
        <div className="joined">Joined: 18/11/2023</div>

        <div className="input-group">
          <input type="text" defaultValue="@username" />
          <img src="/icons/logout.png" alt="icon" className="icon" />
        </div>

        <div className="input-group">
          <input type="email" value={email} readOnly />
          <img src="/icons/logout.png" alt="icon" className="icon" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Enter current password" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Enter new password" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Confirm new password" />
        </div>

        <button className="btn">Save</button>

      </div>
    </div>
  );
};

export default Profile;
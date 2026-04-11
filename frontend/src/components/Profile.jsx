import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:9090/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username,
          email,
          currentPassword,
          newPassword,
        }),
      });

      const data = await res.text();

      if (data.startsWith("ERROR")) {
        alert(data);
      } else {
        alert("Profile updated successfully 🚀");

        // ✅ REDIRECT AFTER SAVE
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">

      <div className="bg-[#111] p-8 rounded-xl shadow-lg w-96 border border-gray-800">

        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Profile
        </h2>

        <form onSubmit={handleSave} className="flex flex-col">

          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white border border-gray-700"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white border border-gray-700"
          />

          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white border border-gray-700"
          />

          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white border border-gray-700"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white border border-gray-700"
          />

          <button
            type="submit"
            className="w-full py-2 bg-[#9e024b] text-white rounded-lg font-semibold hover:bg-[#7a013a]"
          >
            Save Changes
          </button>

        </form>
      </div>
    </div>
  );
};

export default Profile;
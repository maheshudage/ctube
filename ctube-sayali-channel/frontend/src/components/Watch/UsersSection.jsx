import React from "react";

const UsersSection = () => {
  return (
    <div className="users-section">
      
      <h4>Participants</h4>

      {["Person 1", "Person 2", "Person 3"].map((user, i) => (
        <div className="user" key={i}>
          <div className="avatar"></div>
          <p>{user}</p>
        </div>
      ))}

    </div>
  );
};

export default UsersSection;
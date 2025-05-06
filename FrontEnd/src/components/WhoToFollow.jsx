import React from "react";

const WhoToFollow = ({ users }) => {
  return (
    <div style={{ backgroundColor: "#1e1e1e", borderRadius: "20px", padding: "16px", color: "white" }}>
      <h3 style={{ marginBottom: "12px", fontSize: "16px" }}>Who to follow</h3>
      {users.map((user, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
          <img src={user.avatar} alt={user.name} style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
          <div style={{ marginLeft: "10px" }}>
            <p style={{ margin: 0 }}>{user.name}</p>
            <p style={{ margin: 0, fontSize: "12px", color: "#aaa" }}>@{user.username}</p>
          </div>
          <button style={{ marginLeft: "auto", backgroundColor: "#4a90e2", border: "none", padding: "6px 12px", borderRadius: "12px", color: "white", cursor: "pointer" }}>
            +
          </button>
        </div>
      ))}
    </div>
  );
};

export default WhoToFollow;

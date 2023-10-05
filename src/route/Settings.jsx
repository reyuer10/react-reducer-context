import React, { useState } from "react";

export default function Settings(props) {
  const [newUsername, setNewUsername] = useState("");
  
  return (
    <div className="p-4 ">
      <div className="title font-bold text-3xl">
        <p>Settings</p>
      </div>
      <div className="settings-container">
        <p className="font-bold text-3xl p-3">Profile</p>
        <p className="p-3">Name: {props.username}</p>
        <div>
          <p className="font-bold text-[#303030]">Change username</p>
          <input
            className="p-1 rounded border border-[#303030]"
            onChange={(e) => setNewUsername(e.target.value)}
            type="text"
          />
          <button
            onClick={() => props.setUsername(newUsername)}
            className="bg-[#303030] px-4 py-1 mx-2 rounded text-white"
          >
            Change save
          </button>
        </div>
      </div>
    </div>
  );
}

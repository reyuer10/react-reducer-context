import React from "react";

export default function About() {
  return (
    <div className="font-mono m-10 ">
      <div>
        <p className="font-bold text-3xl text-[#303030]">About</p>
      </div>
      <div className="text-gray-500 font-medium">
        <p className="  underline">Created on October 6, 2023</p>
        <p>React + Vite </p>
        <p>Practice React Hooks (useReducer & useContext)</p>
      </div>
      <div className="shadow-md p-3 rounded-xl m-10">
        <p className="font-bold text-gray-400">Mixed simple applications created</p>
        <p className="text-gray-700 font-bold">My Objective: </p>
        <ul>
          <li>Create apps with the use of useReducer & useContext</li>
        </ul>
      </div>
    </div>
  );
}

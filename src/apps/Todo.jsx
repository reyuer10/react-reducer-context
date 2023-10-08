import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";

import { PiPlusBold } from "react-icons/pi";

export default function Todo() {
  const { state, dispatch } = useContext(AppContext);
  const [value, setValue] = useState("");

  const addTodo = () => {
    dispatch({ type: "ADD_TODO", value });
    setValue("");
  };
  return (
    <div className="shadow-md rounded-xl p-4 space-y-3 w-[350px]">
      <div>
        <p className="font-medium text-xl text-center">Todo List</p>
      </div>
      <div className="flex items-center space-x-3 justify-center">
        <input
          className="p-2 rounded-xl shadow-md w-full"
          name="todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter to do..."
          type="text"
        />
        <button
        onClick={() => addTodo()}
        className="shadow-md p-2 rounded-xl">
          <PiPlusBold size={24} />
        </button>
      </div>
      <div>
        {state.todoList && state.todoList.map((todo, index) => (
          <div key={index}>
            <p>{todo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

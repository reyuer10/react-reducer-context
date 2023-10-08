import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";

import {
  PiPlusBold,
  PiMinusBold,
  PiSquareBold,
  PiCheckSquareBold,
} from "react-icons/pi";

export default function Todo() {
  const { state, dispatch } = useContext(AppContext);
  const [value, setValue] = useState("");

  const addTodo = () => {
    dispatch({ type: "ADD_TODO", value });
    setValue("");
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", id });
  }

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
        <button onClick={() => addTodo()} className="shadow-md p-2 rounded-xl">
          <PiPlusBold size={24} />
        </button>
      </div>
      <div>
        {state.todoList.map((todos, index) => (
          <div className="flex justify-between px-5" key={todos.id}>
            <div className={`${todos.completed ? "line-through decoration-2 text-gray-300" : ""} flex`}>
              <p className="text-slate-600">{todos.id}</p>
              <p className={`${todos.completed ? "text-gray-300" : ""} text-slate-700 font-bold`}>
                {`. ` + todos.newValue}
              </p>
            </div>
            {console.log(todos.completed)}
            <div className="space-x-3">
              <button onClick={() => toggleTodo(todos.id)}>
                {!todos.completed ? (
                  <PiSquareBold size={24} />
                ) : (
                  <PiCheckSquareBold size={24} />
                )}
              </button>
              <button onClick={() => deleteTodo(todos.id)}>
                <PiMinusBold size={24} />
              </button>
            </div>
          </div> 
        ))}
      </div>
    </div>
  );
}

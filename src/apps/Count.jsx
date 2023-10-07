import React, { useContext } from "react";
import { AppContext } from "../AppContext";

export default function Count() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="font-mono flex flex-col justify-center shadow-md p-5 rounded-xl w-[350px]">
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium">Counter</p>
        <button
          className="float-right px-4 py-2 rounded-lg bg-slate-500 text-white font-bold"
          onClick={() => dispatch({ type: "RESET_BUTTON" })}
        >
          Reset
        </button>
      </div>
      <p className="font-bold text-3xl text-center py-8 bg-slate-100 my-3 rounded-xl">
        {state.count}
      </p>
      <div className="space-x-4 flex justify-center">
        <button
          className="px-4 py-2 rounded-lg bg-slate-500 text-white font-bold"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-slate-500 text-white font-bold"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

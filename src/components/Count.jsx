import React, { useContext } from 'react'
import { AppContext } from '../AppContext';

export default function Count() {
    const { state, dispatch } = useContext(AppContext);
  return (
    <div className="font-mono flex flex-col items-center justify-center h-[90vh]">
    <p className="font-bold text-2xl">{state.count}</p>
    <div className="space-x-7">
      <button
        className="px-4 py-2 rounded-lg bg-slate-200"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        increment
      </button>
      <button
        className="px-4 py-2 rounded-lg bg-slate-200"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        decrement
      </button>
    </div>
    <button onClick={() => dispatch({ type: "TOGGLE_BUTTON" })}>
      {state.isToggleOpen ? "Open" : "Close"}
    </button>
  </div>
  )
}

import React, { useContext } from "react";
import { AppContext } from "../AppContext";

export default function NumberGuessingGame() {
  const { state, dispatch } = useContext(AppContext);

  // randomGuess = math.floor(math.random() * 100);
  // timer = 60

  // reminder:
  // timer = setTimer(minus) until run out of time;
  // give up button = then stop all and set into false;
  // guessing number by giving hint;

  // tactic:
  // using if else condition for the algorithm;

  return (
    <div className="shadow-md p-3 rounded-xl w-[350px] space-y-10">
      <div>
        <p className="font-medium text-xl text-center">
          {state.isGameStart ? "Guess the number" : "Number Guessing Game"}
        </p>
      </div>
      <div className="text-center shadow-md m-5 py-10 rounded-xl bg-slate-50">
        <button
          onClick={() => dispatch({ type: "START_GAME" })}
          className="font-bold px-4 py-2 rounded-full  bg-amber-400 shadow-md text-slate-700"
        >
          {state.isGameStart ? "Give up" : "Start"}
        </button>
      </div>
    </div>
  );
}

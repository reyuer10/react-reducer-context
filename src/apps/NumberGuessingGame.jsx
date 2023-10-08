import React, { useContext, useState } from "react";
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

  const [hintText, setHinText] = useState("");
  const [guessingText, setGuessingText] = useState(0);
  const guessNumber = Math.floor(Math.random() * 100);
  const startGame = () => {
    if (!state.isGameStart) {
      handleSubmit();
    }

    dispatch({ type: "START_GAME" });
  };

  const handleSubmit = () => {
    let num = guessNumber;
    if (guessingText === 0) {
      console.log(guessNumber)
      console.log(num)
      setHinText("Pick a number");
    } else if (guessingText >= guessNumber) {
      setHinText("Too low");
    } else if (guessNumber <= 30) {
      setHinText("Too low");
    } else if (guessNumber <= 45) {
      setHinText("Too low");
    } else if (guessNumber <= 60) {
      setHinText("Too low");
    } else if (guessNumber <= 75) {
      setHinText("Too low");
    } else if (guessNumber <= 90) {
      setHinText("Too low");
    } else if (guessNumber >= 100) {
      setHinText("Too low");
    }
  };
  return (
    <div className="shadow-md p-3 rounded-xl w-[350px] space-y-5">
      <div>
        <p className="font-medium text-xl text-center">
          {state.isGameStart ? "Guess the number" : "Number Guessing Game"}
        </p>
      </div>
      <div className="text-center shadow-md m-5 py-4 rounded-xl bg-slate-50">
        {!state.isGameStart ? (
          <>
            <button
              onClick={() => startGame()}
              className="font-bold px-4 py-2 rounded-full  bg-amber-400 shadow-md text-slate-700"
            >
              Start
            </button>
          </>
        ) : (
          <>
            <div>
              <div>
                <input
                  className="text-center text-xl p-5"
                  value={hintText}
                  disabled={true}
                  type="text"
                />
              </div>
              <div className="flex items-center justify-center gap-x-5">
                <input
                  value={guessingText}
                  onChange={(e) => setGuessingText(e.target.value)}
                  name="guessingText"
                  type="number"
                  className="rounded-xl p-1 text-center text-xl shadow-md ring-1 ring-slate-300 w-[100px] outline-none text-[#303030]"
                />
                <button
                  onClick={() => handleSubmit()}
                  className="px-4 py-2 rounded-xl shadow-md font-bold"
                >
                  Submit
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {state.isGameStart && (
        <>
          <button
            onClick={() => dispatch({ type: "START_GAME" })}
            className="font-bold px-4 py-2 rounded-full  bg-amber-400 shadow-md text-slate-700"
          >
            Give up
          </button>
        </>
      )}
    </div>
  );
}

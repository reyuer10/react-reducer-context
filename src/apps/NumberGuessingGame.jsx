import React, { useContext, useEffect, useState } from "react";
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
  const [attempt, setAttempt] = useState(0);
  const [guessNumber, setGuessNumber] = useState(
    Math.floor(Math.random() * 100)
  );
  const [isGuessCorrect, setIsGuessCorrect] = useState(false);
  const [isUserGiveUp, setIsUserGiveUp] = useState(false);

  useEffect(() => {
    console.log(guessNumber);
  }, []);

  const handleSubmit = (guessNum) => {
    console.log(guessNum);
    if (guessingText === 0) {
      setHinText("Pick a number");
    } else if (guessingText > guessNum) {
      setAttempt((att) => att + 1);
      setHinText("Too high");
    } else if (guessingText < guessNum) {
      setAttempt((att) => att + 1);
      setHinText("Too low");
    } else {
      setHinText(`Congratulations! the guess number is ${guessNum}`);
      setAttempt((att) => att + 1);
      setIsGuessCorrect(!isGuessCorrect);
    }
  };

  const handleGiveUp = () => {
    setHinText(`The guess number is`);
    setIsUserGiveUp(!isUserGiveUp);
  };

  const startGame = () => {
    if (!state.isGameStart) {
      setGuessingText(0);
      setAttempt(0);
      handleSubmit();
      console.log(guessNumber);
    }
    setIsUserGiveUp(false);
    setIsGuessCorrect(false);
    dispatch({ type: "START_GAME" });
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
                  className={`${
                    isUserGiveUp ? "text-red-500" : ""
                  } text-center text-xl p-5`}
                  value={hintText}
                  disabled={true}
                  type="text"
                />
              </div>
              <div className="flex items-center justify-center gap-x-5">
                {!isUserGiveUp ? (
                  <>
                    <input
                      value={guessingText}
                      onChange={(e) => setGuessingText(e.target.value)}
                      name="guessingText"
                      type="number"
                      className={`rounded-xl p-1 text-center text-xl shadow-md ring-1 ring-slate-300 w-[100px] outline-none text-[#303030]`}
                    />
                  </>
                ) : (
                  <>
                    <input
                      disabled
                      type="text"
                      className={`rounded-xl p-1 text-center text-xl shadow-md ring-1 ring-slate-300 w-[100px] outline-none text-[#303030]`}
                      value={guessNumber}
                    />
                  </>
                )}
                {!isGuessCorrect && !isUserGiveUp && (
                  <button
                    onClick={() => handleSubmit(guessNumber)}
                    className="px-4 py-2 rounded-xl shadow-md font-bold"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      {state.isGameStart && (
        <div className="flex items-center justify-evenly">
          {isGuessCorrect ? (
            <>
              <button
                onClick={() => startGame()}
                className="font-bold px-4 py-2 rounded-full  bg-amber-400 shadow-md text-slate-700"
              >
                Another guess
              </button>
            </>
          ) : (
            <>
              {!isUserGiveUp ? (
                <button
                  onClick={handleGiveUp}
                  className="font-bold px-4 py-2 rounded-full  bg-amber-400 shadow-md text-slate-700"
                >
                  Give up
                </button>
              ) : (
                <>
                  <button
                    onClick={() => dispatch({ type: "START_GAME" })}
                    className="font-bold px-4 py-2 rounded-full  bg-amber-400 shadow-md text-slate-700"
                  >
                    Main menu
                  </button>
                </>
              )}
            </>
          )}
          <input
            className="shadow-md rounded-full w-[130px] py-2 text-center font-bold text-slate-500"
            type="text"
            disabled
            value={`Attempt: ${attempt}`}
          />
        </div>
      )}
    </div>
  );
}

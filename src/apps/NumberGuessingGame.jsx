import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import GuessNumberField from "./GuessNumberField";
import { useNavigate } from "react-router-dom";

export default function NumberGuessingGame() {
  const navigation = useNavigate();
  const { state, dispatch } = useContext(AppContext);

  // randomGuess = math.floor(math.random() * 100);
  // timer = 60

  // reminder:
  // timer = setTimer(minus) until run out of time;
  // give up button = then stop all and set into false;
  // guessing number by giving hint;

  // tactic:
  // using if else condition for the algorithm;

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };
  const generateNewNumber = generateRandomNumber();
  const [hintText, setHinText] = useState("");
  const [guessingText, setGuessingText] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [guessNumber, setGuessNumber] = useState(generateRandomNumber());
  const [isGuessCorrect, setIsGuessCorrect] = useState(false);
  const [isUserGiveUp, setIsUserGiveUp] = useState(false);

  // useEffect(() => {
  //   console.log(guessNumber);
  // }, []);

  // useEffect(() => {
  //   handleSubmit();
  // }, [])
  const handleMainMenu = () => {
    setGuessingText(0);
    dispatch({ type: "START_GAME" });
  };

  const handleSubmit = (guessNum) => {
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

  const handleAnotherGuess = () => {
    console.log(generateNewNumber);
    setGuessNumber(generateNewNumber);
    setIsUserGiveUp(false);
    setIsGuessCorrect(false);
    setHinText("Pick a number");
    setAttempt(0);
    setGuessingText(0);
  };

  const startGame = () => {
    console.log(generateNewNumber);
    if (!state.isGameStart) {
      setGuessNumber(generateNewNumber);
      setGuessingText(0);
      setAttempt(0);
      handleSubmit();
      setIsUserGiveUp(false);
      setIsGuessCorrect(false);
    }
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
            <GuessNumberField
              isUserGiveUp={isUserGiveUp}
              guessingText={guessingText}
              hintText={hintText}
              guessNumber={guessNumber}
              isGuessCorrect={isGuessCorrect}
              setGuessingText={setGuessingText}
              handleSubmit={handleSubmit}
            />
          </>
        )}
      </div>
      {state.isGameStart && (
        <div className="flex items-center justify-evenly">
          {isGuessCorrect ? (
            <>
              <button
                onClick={handleAnotherGuess}
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
                    onClick={handleMainMenu}
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

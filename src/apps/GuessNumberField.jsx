import React from "react";

export default function GuessNumberField({
  isUserGiveUp,
  guessingText,
  hintText,
  guessNumber,
  isGuessCorrect,
  setGuessingText,
  handleSubmit,
}) {
  return (
    <div>
      <div>
        <p
          className={`${
            isUserGiveUp ? "text-red-500" : ""
          } text-center text-sm font-semibold p-5`}
        >
          {hintText}
        </p>
      </div>
      <div className="flex items-center justify-center gap-x-5">
        {!isUserGiveUp ? (
          <>
            <input
              disabled={isGuessCorrect}
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
  );
}

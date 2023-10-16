import React from "react";

export default function GuessNumberButtonField({
  isGuessCorrect,
  handleAnotherGuess,
  isUserGiveUp,
  handleGiveUp,
  handleMainMenu,
  attempt
}) {
  return (
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
  );
}

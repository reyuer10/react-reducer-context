import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { PiMoonBold, PiSunDimBold } from "react-icons/pi";
// bg-slate-500 text-slate-300
export default function Count() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div
      className={`${
        state.isButtonClick ? "bg-slate-700" : ""
      } transition-colors ease-in-out duration-300 font-mono flex flex-col justify-evenly shadow-md p-5 rounded-xl w-[350px] gap-y-8`}
    >
      <div>
        <button
          className={`${
            state.isButtonClick ? "bg-slate-500 text-white" : "bg-slate-300"
          } flex items-center space-x-2 px-4 py-2 rounded-full`}
          onClick={() => dispatch({ type: "BUTTON_DARK_TOGGLE" })}
        >
          {!state.isButtonClick ? (
            <>
              <div>
                <p className="text-xl">Dark mode</p>
              </div>
              <PiMoonBold size={20} />
            </>
          ) : (
            <>
              <p className="text-xl "> Light mode</p>
              <PiSunDimBold size={24} />
            </>
          )}
        </button>
      </div>
      <div
        className={`${
          state.isButtonClick ? "bg-slate-500 text-slate-200" : "bg-slate-200"
        } p-3 rounded-lg`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        neque.
      </div>
      <div
        className={`${
          state.isButtonClick ? "text-slate-200" : ""
        } text-xl font-medium`}
      >
        <p>Dark Mode Toggle</p>
      </div>
    </div>
  );
}

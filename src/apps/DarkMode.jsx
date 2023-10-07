import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { PiMoonBold, PiSunDimBold } from "react-icons/pi";

export default function Count() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="font-mono flex flex-col justify-center shadow-md p-5 rounded-xl">
      <div>
        <button
          className="flex items-center space-x-2"
          onClick={() => dispatch({ type: "BUTTON_DARK_TOGGLE" })}
        >
          {state.isButtonClick ? (
            <>
              <div className="hover:">
              <p className="text-xl"> Dark mode</p>
              </div>
              <PiMoonBold size={24} />
            </>
          ) : (
            <>
              <p className="text-xl"> Light mode</p>
              <PiSunDimBold size={30} />
            </>
          )}
        </button>
      </div>
      <div className="text-xl font-medium">
        <p>Dark Mode Toggle</p>
      </div>
    </div>
  );
}

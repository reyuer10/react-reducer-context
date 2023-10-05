import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  PiHouseBold,
  PiHouseFill,
  PiQuestionBold,
  PiQuestionFill,
  PiNumberCircleOneBold,
  PiNumberCircleOneFill,
  PiNotepadBold,
  PiNotepadFill
} from "react-icons/pi";
import { AppContext } from "../AppContext";

export default function RootLayout() {
  const { state, dispatch } = useContext(AppContext);

  const handleButtonChangeIcon = (item) => {
    dispatch({ type: "BUTTON_ICON", item });
  };

  const LinkComponent = () => {
    return (
      <>
        <Link
          to="/"
          className={`${
            state.LinkName === "Home" ? "text-blue-700" : ""
          } flex items-center text-xl`}
          onClick={() => handleButtonChangeIcon("Home")}
        >
          {state.LinkName === "Home" ? (
            <PiHouseFill size={24} />
          ) : (
            <PiHouseBold size={24} />
          )}
          Home
        </Link>
        <Link
          to="/about"
          className={`${
            state.LinkName === "About" ? "text-blue-700" : ""
          } flex items-center text-xl`}
          onClick={() => handleButtonChangeIcon("About")}
        >
          {state.LinkName === "About" ? (
            <PiQuestionFill size={24} />
          ) : (
            <PiQuestionBold size={24} />
          )}
          About
        </Link>
        <Link
          className={`${
            state.LinkName === "Count" ? "text-blue-700" : ""
          } flex items-center text-xl`}
          onClick={() => handleButtonChangeIcon("Count")}
          to="/count"
        >
          {state.LinkName === "Count" ? (
            <PiNumberCircleOneFill size={24} />
          ) : (
            <PiNumberCircleOneBold size={24} />
          )}
          Count
        </Link>
        <Link
          className={`${
            state.LinkName === "Todo" ? "text-blue-700" : ""
          } flex items-center text-xl`}
          onClick={() => handleButtonChangeIcon("Todo")}
          to="/todo"
        >
          {state.LinkName === "Todo" ? (
            <PiNotepadFill size={24} />
          ) : (
            <PiNotepadBold size={24} />
          )}
          Todo
        </Link>
      </>
    );
  };

  return (
    <div className="font-mono">
      <div className="flex justify-between items-center p-6 shadow-sm">
        <div>
          <p className="font-bold text-4xl">Logo</p>
        </div>
        <div className="space-x-10 flex">
          <LinkComponent />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

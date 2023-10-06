import React, { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  PiHouseBold,
  PiHouseFill,
  PiQuestionBold,
  PiQuestionFill,
  PiNumberCircleOneBold,
  PiNumberCircleOneFill,
  PiNotepadBold,
  PiNotepadFill,
  PiEqualsBold,
} from "react-icons/pi";
import { AppContext } from "../AppContext";

export default function RootLayout() {
  const { state, dispatch } = useContext(AppContext);
  const [isDashBoardClick, setisDashBoardClick] = useState(false);

  const handleDashBoardClick = () => {
    setisDashBoardClick(!isDashBoardClick);
  };

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
      <div className="flex justify-between items-center p-6 shadow-md">
        <div>
          <p className="font-bold text-4xl">Logo</p>
        </div>
        <div className="md:hidden">
          <PiEqualsBold
            onClick={() => handleDashBoardClick()}
            className="cursor-pointer hover:text-gray-500 transition-all ease-in-out"
            size={24}
          />
          {isDashBoardClick ? (
            <>
              <div className="shadow-md absolute right-14 top-5 bg-white rounded-2xl">
                <div className="flex flex-col text-left space-y-2 w-[240px] p-7">
                  <Link className="flex hover:bg-gray-300 py-1 rounded-lg text-xl">
                    <PiHouseBold size={24} className="mx-2" />
                    Home
                  </Link>
                  <Link className="flex hover:bg-gray-300 py-1 rounded-lg text-xl">
                    <PiQuestionBold size={24} className="mx-2" />
                    About
                  </Link>
                  <Link className="flex hover:bg-gray-300 py-1 rounded-lg text-xl">
                    <PiNumberCircleOneBold size={24} className="mx-2" />
                    Count
                  </Link>
                  <Link className="flex hover:bg-gray-300 py-1 rounded-lg text-xl">
                    <PiNotepadBold size={24} className="mx-2" />
                    Todo
                  </Link>
                </div>
              </div>
            </>
          ) : null}
        </div>
        <div className={`space-x-10 flex max-md:hidden`}>
          <LinkComponent />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

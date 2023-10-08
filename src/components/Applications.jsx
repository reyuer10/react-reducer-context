import React from "react";
import Todo from "../apps/Todo";
import Count from "../apps/Count";
import DarkMode from "../apps/DarkMode";

export default function Applications() {
  return (
    <div className="m-8 space-x-10">
      <div className="max-md:mx-auto max-md:w-max md:flex md:flex-grow md:flex-wrap basis-30 gap-x-10 max-xl:space-y-10">
        <Count />
        <DarkMode />
        <Todo />
      </div>
    </div>
  );
}

import React from "react";
import Todo from "../apps/Todo";
import Count from "../apps/Count";
import DarkMode from "../apps/DarkMode";

export default function Applications() {
  return (
    <div className="md:flex max-md:m-auto m-8 space-x-10 max-md:space-y-16 max-md:my-16 max-md:w-[400px]">
      <Count />
      <DarkMode />
      <Todo />
    </div>
  );
}

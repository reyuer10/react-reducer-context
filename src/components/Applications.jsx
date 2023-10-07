import React from "react";
import Todo from "../apps/Todo";
import Count from "../apps/Count";
import DarkMode from "../apps/DarkMode";

export default function Applications() {
  return (
    <div className=" m-8 space-x-10">
      <Count />
      <DarkMode />
      <Todo />
    </div>
  );
}

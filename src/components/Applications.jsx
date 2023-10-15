import React from "react";

// components
import Todo from "../apps/Todo";
import Count from "../apps/Count";
import DarkMode from "../apps/DarkMode";
import NumberGuessingGame from "../apps/NumberGuessingGame";
import Calculator from "../apps/calculator";
import CatsFacts from "../apps/CatsFacts";
import BmiCalculator from "../apps/BmiCalculator";

export default function Applications() {
  return (
    <div className="m-8 space-x-10">
      <div className="max-md:mx-auto max-md:w-max md:flex md:flex-grow md:flex-wrap basis-30 gap-y-10 gap-x-5 justify-evenly max-xl:space-y-10">
        <Count />
        <DarkMode />
        <Todo />
        <NumberGuessingGame />
        <CatsFacts />
        <BmiCalculator />
        {/* <Calculator /> */}
      </div>
    </div>
  );
}

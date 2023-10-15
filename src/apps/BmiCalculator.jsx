import React from "react";

export default function BmiCalculator() {
  return (
    <div className="font-mono flex flex-col justify-center shadow-md p-5 rounded-xl w-[350px] space-y-8">
      <div>
        <p className="text-center text-xl font-md">BMI Calculator</p>
      </div>
      <div className="flex items-center">
        <label>Units</label>
        <select className="w-full mx-3 rounded-lg shadow-md p-2">
          <option value="choose">Standard</option>
          <option value="choose">Metric</option>
        </select>
      </div>
    </div>
  );
}

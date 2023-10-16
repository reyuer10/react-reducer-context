import React, { useContext, useState } from "react";

export default function BmiCalculator() {
  const [bmiValue, setBmiValue] = useState({
    heightFt: 0,
    heightIn: 0,
    weight: 0,
  });

  const handleBmiValue = (event) => {
    const { name, value } = event.target;
    setBmiValue({ ...bmiValue, [name]: value });
  };
  const [bmiResults, setBmiResults] = useState(0);
  const [bmiResultsString, setBmiResultsString] = useState("");

  const handleCalculate = () => {
    const heightFtFormula = parseInt(heightFt) * 12 + parseInt(heightIn);
    const heightFtAndIn = heightFtFormula * heightFtFormula;
    const weightFormula = weight / heightFtAndIn;
    const bmiFormula = weightFormula * 703;
    setBmiResults(bmiFormula.toFixed(1));

    if (bmiFormula < 18.5) {
      setBmiResultsString("Underweight");
    } else if (bmiFormula < 25) {
      setBmiResultsString("Normal weight");
    } else if (bmiFormula < 30) {
      setBmiResultsString("Overweight");
    } else if (bmiFormula > 30) {
      setBmiResultsString("Obese");
    }
  };

  const { heightFt, heightIn, weight } = bmiValue;

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
      <div className="rounded-xl p-2 bg-slate-100 space-y-7">
        <div className="space-y-2 py-3">
          <div className="flex justify-evenly items-center">
            <input
              onChange={handleBmiValue}
              value={heightFt}
              id="heightFt"
              name="heightFt"
              className="p-1 rounded-lg text-center"
              type="number"
              placeholder="Height"
            />
            <label className="font-semibold text-slate-500">Feets</label>
          </div>
          <div className="flex justify-evenly items-center">
            <input
              onChange={handleBmiValue}
              value={heightIn}
              id="heightIn"
              name="heightIn"
              className="p-1 rounded-lg text-center"
              type="number"
              placeholder="Height"
            />
            <label className="font-semibold text-slate-500">Inches</label>
          </div>
        </div>
        <div className="flex justify-evenly items-center">
          <input
            onChange={handleBmiValue}
            id="weight"
            name="weight"
            value={weight}
            className="p-1 rounded-lg text-center"
            type="number"
            placeholder="Weight"
          />
          <label className="font-semibold text-slate-500">Pounds</label>
        </div>
        <div className="flex justify-evenly">
          <button onClick={handleCalculate}>Calculate</button>
          <input className="text-center" type="text" value={bmiResults} />
        </div>
        <div
          className={`${
            (bmiResultsString === "Under weight" && "bg-amber-300") ||
            (bmiResultsString === "Normal weight" && "bg-green-400") ||
            (bmiResultsString === "Normal weight" && "bg-amber-400") ||
            (bmiResultsString === "Obese" && "bg-amber-400")
          } text-center rounded-lg p-1 font-semibold text-slate-100`}
        >
          {bmiResultsString}
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function CalculatorTip() {
  return (
    <div className="font-mono flex flex-col justify-center shadow-md p-5 rounded-xl w-[350px]">
      <div>
        <p className="text-xl font-medium text-center">Calculator Tip</p>
      </div>
      <div>
        <label>Tip amount / person</label>
        <input type="text" disabled />
        <label>Total / person</label>
        <input type="text" disabled />
      </div>
      <div>
        <span></span>
        <input type="text" placeholder="Number of people" />
      </div>
      <div>
        <input type="text" placeholder="Enter tip percentage" />
      </div>
      <div>
        <label>Enter Bill</label>
        <input type="text" placeholder="$$" />
        <button>Reset</button>
      </div>
    </div>
  );
}

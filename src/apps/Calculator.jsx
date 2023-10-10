import React from "react";
import {
  PiXBold,
  PiDivideBold,
  PiXSquareBold,
  PiPercentBold,
  PiMinusBold,
  PiPlusBold,
  PiEqualsBold,
} from "react-icons/pi";

export default function Calculator() {
  return (
    <div className="shadow-md p-3 rounded-xl w-[350px] space-y-5">
      <div>
        <p className="text-center font-medium">Calculator</p>
      </div>
      <div>
        <input
          className="w-full text-right p-2 shadow-md rounded-lg"
          type="text"
          value={0}
          disabled
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-evenly w-full">
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">C</button>
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">
            <PiDivideBold />
          </button>
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">
            <PiXBold />
          </button>
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">
            <PiXSquareBold />
          </button>
        </div>

        <div className="flex items-center justify-evenly w-full">
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">7</button>
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">8</button>
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">9</button>
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">
            <PiMinusBold />
          </button>
        </div>

        <div className="flex items-center justify-evenly w-full">
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">4</button>
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">5</button>
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">6</button>
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">
            <PiPlusBold />
          </button>
        </div>

        <div className="flex items-center justify-evenly w-full">
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">1</button>
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">2</button>
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">3</button>

    
            <button className="shadow-md row-span-2">
              <PiEqualsBold />
            </button>
          </div>
          <div>
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">
            <PiPercentBold />
          </button>
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">0</button>
          <button className="py-2 px-5 shadow-md bg-slate-50 rounded-lg">.</button>
        </div>
      </div>
    </div>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";

export default function CatsFacts() {
  const [dataCats, setDataCats] = useState([]);
  const url = "https://catfact.ninja/fact?max_length=200";
  const handleFetch = async () => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setDataCats(res.data);
      console.log(dataCats);
    });
  };
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="shadow-md p-3 rounded-xl w-[350px] space-y-5 ">
      <div>
        <div className="text-center">
          <button
            onClick={handleFetch}
            className="  px-4 py-2 rounded-full bg-blue-400 font-bold text-white shadow-lg text-lg"
          >
            Fetch
          </button>
        </div>
        <div className="my-7">
          <p className="justify-center flex items-center text-center p-3 font-md text-sm font-bold bg-slate-100 rounded-lg h-[150px]">
            {dataCats.fact}
          </p>
        </div>
      </div>
    </div>
  );
}

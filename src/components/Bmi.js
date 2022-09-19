import React, { useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
  return (
    <div className="flex justify-center bg-cyan-50 pt-20">
      <div className="bg-red-400 text-white w-fit px-32 mt-1 py-4 rounded-lg">
        <h1 className=" font-bold text-3xl flex justify-center my-4">BMI Calculator</h1>
        <div className="flex flex-col">
          <div className="w-full bg-white m-2 px-2 py-1 rounded-md placeholder:text-gray-400 text-gray-400 outline-none border-spacing-8">
            <p className="">Gender</p>
            <div className="flex">
            <div>
              <input id="html" className="py-4" type="radio" value="Male" />
              <label className="p-2 my-2" htmlFor="html">Male</label>
            </div>
            <div className="px-8">
              <input className="" type="radio" value="Female" />
              <label className="p-2 my-2" htmlFor="html">Female</label>
            </div>
            </div>
          </div>
          <input type="number" className=" w-full m-2 px-4 py-2 rounded-md placeholder:text-gray-400 text-gray-400 outline-none" placeholder="Age" />
          <input className=" w-full m-2 px-4 py-2 rounded-md placeholder:text-gray-400 text-gray-400 outline-none"
            type="text"
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height in cm"
          />
          <input className=" w-full m-2 px-4 py-2 rounded-md placeholder:text-gray-400 text-gray-400 outline-none"
            type="text"
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight in kg"
          />
        </div>
        <button onClick={handleBmi} className="flex mx-auto border rounded-lg p-1 m-2 bg-white text-red-400 font-semibold">Calculate</button>
        <h1 className=" text-white font-bold text-lg">Your BMI is: {bmi}</h1>
        <h2>Which means you are <span className="font-bold">{info}!</span></h2>
        <div className=" text-xs mt-4 flex justify-between">
      <Link to="/">
      <p className=" cursor-pointer -mx-20">&lt; Go back</p>
      </Link>
      <p className=" cursor-pointer -mx-24"><a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html#:~:text=Body%20Mass%20Index%20(BMI)%20is,or%20health%20of%20an%20individual." target="blank">Learn more on BMI &gt;</a></p>
      </div>
      </div>
    </div>
  );
};

export default App;

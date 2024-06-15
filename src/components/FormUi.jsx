import React, { useState } from "react";

const FormUi = () => {
  const [amt, setamt] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [simpleInterest, setSimpleInterest] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amt === 0 || rate === 0 || time === 0) {
      alert("Zero in not a valid input");
    } else {
      const simpleInterest = (amt * rate * time) / 100;
      console.log(simpleInterest);
      setSimpleInterest(parseInt(simpleInterest));
    }
  };
  const handleReset = (e) => {
    e.preventDefault();
    setamt(0);
    setRate(0);
    setTime(0);
    setSimpleInterest(0);
  };
  return (
    <>
      <div className="  rounded p-5 bg-white">
        <h1 className="text-2xl capitalize font-semibold text-center ">
          simple interest calculator
        </h1>
        <p className="text-sm capitalize text-gray-800 font-semibold text-left m-4 ml-0 mt-0">
          calculate your simple interest easily
        </p>
        <div className="h-32 m-5 ml-0 mr-0 bg-indigo-800 rounded-lg text-white flex flex-col justify-center items-center">
          <span>
            <i className="fa-solid fa-indian-rupee-sign text-3xl">
              &nbsp;{simpleInterest}/-
            </i>
          </span>
        </div>
        <form>
          <div className="m-4 ml-0 mr-0">
            <label
              htmlFor="amount"
              className="font-semibold flex justify-start items-center text-sm gap-2 mb-1 capitalize"
            >
              <i className="fa-solid fa-indian-rupee-sign mt-1"></i>
              <span>principal amount</span>
            </label>
            <input
              type="number"
              name=""
              id="amount"
              className="w-full border-2 border-indigo-400 h-8 focus:bg-indigo-100 transition-all p-2 font-semibold rounded"
              value={amt}
              onChange={(e) => setamt(e.target.value)}
            />
          </div>
          <div className="m-4 ml-0 mr-0">
            <label
              htmlFor="rate"
              className="font-semibold flex justify-start items-center text-sm gap-2 mb-1 capitalize"
            >
              rate of interest(p.a)%
            </label>
            <input
              type="number"
              name=""
              id="rate"
              className="w-full border-2 border-indigo-400 h-8 focus:bg-indigo-100 transition-all p-2 font-semibold rounded"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="font-semibold flex justify-start items-center text-sm gap-2 mb-1 capitalize"
            >
              time period( yr )
            </label>
            <input
              type="number"
              name=""
              id="time"
              className="w-full border-2 border-indigo-400 h-8 focus:bg-indigo-100 transition-all p-2 font-semibold rounded"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="flex m-4 ml-0 mr-0 gap-2">
            <button
              className="bg-black text-white p-2 w-full border-2 border-black hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-md font-bold tracking-widest"
              onClick={handleSubmit}
            >
              calculate
            </button>
            <button
              type="reset"
              className="bg-black text-white p-2 w-full border-2 border-black hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-md font-bold tracking-widest"
              onClick={handleReset}
            >
              reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormUi;

import React, { useState } from "react";

interface inputProps {
  handleClick(time: number): void;
}

export const TimerInput = ({ handleClick }: inputProps) => {
  let [time, setTime] = useState(0);

  const handleChange = (e) => {
    let inputTime = e.target.value;
    setTime(inputTime);
  };
  return (
    <div className="z-6 mx-auto space-y-4 flex flex-col md:flex-row justify-center items-center md:space-y-0">
      <input
        className="text-xl md:text-2xl font-redhat outline-none px-2 py-1 w-40 rounded-lg mr-4 "
        name="Timer Input"
        type="date"
        value={time}
        onChange={handleChange}
      />

      <button
        onClick={() => handleClick(time)}
        className="bg-rose-300 text-xl font-semibold font-redhat px-4 py-2 md:text-xl rounded-xl text-rose-500 hover:bg-rose-500 hover:text-rose-100 transition duration-300 ease-in"
      >
        {" "}
        Set Value
      </button>
    </div>
  );
};

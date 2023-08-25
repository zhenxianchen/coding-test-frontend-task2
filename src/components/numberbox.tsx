import React from "react";

interface numProp {
  num: string | number;
  unit: string;
  flip: boolean;
}

export const NumberBox = ({ num, unit, flip }: numProp) => {
  return (
    <div className="flex flex-col items-center mt-4 px-2">
      <div>
        <div></div>

        <div>{num}</div>

        <div></div>

        <div></div>
      </div>
      <p>{unit}</p>
    </div>
  );
};

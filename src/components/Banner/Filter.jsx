import React from "react";
import Button from "../Button";

const Filter = () => {
  return (
    <div className="xl:w-second w-full shadow-sm rounded-lg bg-white h-[120px] flex justify-between items-center p-6 bottom-10 relative">
      <div className="flex justify-between w-full">
        <div className="flex justify-between items-center gap-4 w-4/5">
            <div className="bg-black w-[200px]">item 1</div>
            <div className="bg-black w-[200px]">item 1</div>
            <div className="bg-black w-[200px]">item 1</div>
        </div>
        <div className="w-1/5">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Filter;

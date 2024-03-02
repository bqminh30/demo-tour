import React from "react";
import bg_main from "../../assets/bg-image-tour.jpg";
import Header from "./Header";
import Filter from "./Filter";

const Banner = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <img
        className="w-full object-cover"
        src={bg_main}
        alt="Background main"
      />
      <div className="xl:w-main w-full flex flex-col justify-between gap-[50px] items-center h-full absolute">
        <div className="">
          <Header />
        </div>
        <div className="">
          <span>back to</span>
          <span>nature</span>
        </div>
        <div>
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Banner;

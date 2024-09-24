import React from "react";
import Headline from "../../../shared/ui/Headline";
import Title from "../../../shared/ui/Title";
import cheif from "/cheif.png";

const Advertisment = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-16 md:my-32 px-4 md:px-0">
      <div className="md:col-span-8 flex flex-col justify-center">
        <Headline>
          <h1 className="text-[#334A55] mainFont text-2xl md:text-4xl lg:text-5xl">
            It’s Now Easier to <span className="text-primary">Book</span> with Our Mobile App
          </h1>
          <Title>
            <p className="text-sm md:text-base lg:text-lg mt-4">
              All you need to do is download one of the best delivery apps,
              and most companies are opting for mobile app development for food delivery.
            </p>
          </Title>
        </Headline>
      </div>
      <div className="md:col-span-4 flex justify-center md:justify-end">
        <img src={cheif} alt="Chief image" className="w-full md:w-auto max-w-xs" />
      </div>
    </div>
  );
};

export default Advertisment;
import React from "react";
import bannerimgpng from "/bannerimg.png";
import { BiSearchAlt } from "react-icons/bi";
import Headline from "../../../shared/ui/Headline";
import Title from "../../../shared/ui/Title";

const Herosection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 lg:px-12 py-10 mainFont">
      {/* Left Section (Text and Input) */}
      <div className="leading-loose space-y-6">
        <Headline>
          Good <span className="text-primary">booking,</span> great memories
        </Headline>
        <Title>
          Enable diners to customize their booking by requesting a specific
          table location or view.
        </Title>

        {/* Search Input */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full p-3 pr-16 rounded-3xl border border-secondary"
            placeholder="Search Food"
          />
          <div className="absolute inset-y-0 right-4 flex items-center">
            <div className="border border-primary bg-primary rounded-full p-2">
              <BiSearchAlt className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex justify-center lg:justify-end">
        <img
          src={bannerimgpng}
          alt="Banner"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
};

export default Herosection;

import React from "react";
import group from "/group.png";
import { FcDataConfiguration } from "react-icons/fc";

const MultipleService = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 p-4">
      {/* Image Section */}
      <div className="flex justify-center md:justify-start">
        <img src={group} alt="Group" className="w-full max-w-md md:max-w-full" />
      </div>

      {/* Text Section */}
      <div>
        <h1 className="text-[28px] md:text-[40px] lg:text-[44px] font-semibold mainFont leading-snug">
          We are <span className="text-primary">more</span> than{" "}
          <span className="text-secondary">multiple</span> service
        </h1>
        <p className="text-secondary text-base md:text-lg lg:text-xl tracking-tight mainFont mt-4">
          This is a type of restaurant which typically serves food and drink, in
          addition to light refreshments such as baked goods or snacks. The term
          comes from the French word meaning food.
        </p>

        {/* Services List */}
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FcDataConfiguration />
              <p>Online Ordering</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FcDataConfiguration />
              <p>Advanced Reservations</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FcDataConfiguration />
              <p>Top Chefs</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FcDataConfiguration />
              <p>24/7 Availability</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FcDataConfiguration />
              <p>Curated Dining Spaces</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleService;

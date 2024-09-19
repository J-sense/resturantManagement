import React from "react";
import group from "/group.png";
import { FcDataConfiguration } from "react-icons/fc";
const MultipleService = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <img src={group} alt="" />
      </div>
      <div>
        <h1 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold mainFont leading-snug">
          We are <span className="text-primary">more</span> than{" "}
          <span className="text-secondary">multiple</span> service
        </h1>
        <p className="text-secondary text-base md:text-lg lg:text-xl tracking-tight mainFont">
          This is a type of resturent which typically serves food and drink, in
          addition to light refreshments such as baked goods or snacks. The term
          comes frome the rench word meaning food
        </p>
        <div className="flex gap-5">
          <div>
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
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FcDataConfiguration />
              <p>24/7 Availability</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FcDataConfiguration />
              <p>Curated Dining Spaces</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FcDataConfiguration />
              <p>Immaculate Kitchens</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleService;

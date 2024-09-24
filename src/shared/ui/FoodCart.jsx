import React from "react";

const FoodCart = ({ item }) => {
  console.log(item);
  return (
    <div className="text-[#758888] mainFont min-h-96 relative">
      <img src={item.image.src} alt="" className="rounded-md" />
      <div className="p-3 space-y-3">
        <h1 className="text-2xl font-bold mainFont">{item.title}</h1>
        <p className="tracking-tight font-normal text-sm">{item.description.substring(0,50)}....</p>
        <p>{item.currency}</p>
        <button className="rounded-full px-7 py-2 text-white bg-[#758888] absolute bottom-0">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default FoodCart;
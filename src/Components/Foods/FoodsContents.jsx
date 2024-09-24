import React, { useEffect, useState } from "react";
import Headline from "../../shared/ui/Headline";
import FoodCart from "../../shared/ui/FoodCart";
import { BiSearchAlt } from "react-icons/bi";

const FoodsContents = () => {
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/foods.json") // Ensure the path is correct
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setFoods(data.foods); // Assuming your JSON structure has a "foods" key
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Handle errors
  }
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between my-14 md:space-x-4 space-y-6 md:space-y-0">
        <Headline>
          Explore <span className="text-primary">Yummy Recipe</span>
        </Headline>

        <div className="relative w-full md:w-auto max-w-md px-10">
          <input
            type="text"
            className="w-full md:w-80 p-3 pr-16 rounded-3xl border border-secondary"
            placeholder="Search Food"
          />
          <div className="absolute inset-y-0 right-12 flex items-center">
            <div className="border border-primary bg-primary rounded-full p-2">
              <BiSearchAlt className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        {foods.map((food, idx) => (
          <FoodCart key={idx} item={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodsContents;

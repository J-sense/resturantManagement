import React, { useEffect, useState } from "react";
import Headline from "../../../shared/ui/Headline";
import FoodCart from "../../../shared/ui/FoodCart";

const FoodsCart = () => {
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
    <div className="my-20">
      <div className="flex items-center justify-between px-7 my-4">
        <Headline className="">Explore Yummy Recipe</Headline>
        <p className="text-primary cursor-pointer hover:underline">See All</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        {foods.slice(0, 4).map((food, idx) => (
          <FoodCart item={food}></FoodCart>
        ))}
      </div>
    </div>
  );
};

export default FoodsCart;

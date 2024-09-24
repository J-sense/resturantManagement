import React, { useEffect, useState } from "react";
import Headline from "../../../shared/ui/Headline";

const FoodsCart = () => {
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/foods.json") // Ensure the path is correct
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => {
        setFoods(data.foods); // Assuming your JSON structure has a "foods" key
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Handle errors
  }

  return (
    <div>
      <div className="flex justify-between">
        <Headline>Explore Yummy Recipe</Headline>
        <p>See All</p>
      </div>
      <ul>
        {foods.map(food => (
          <div key={food.id} className="">
            <h2>{food.title}</h2>
            <p>Price: {food.price} {food.currency}</p>
            <img src={food.image.src} alt={food.image.alt} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FoodsCart;

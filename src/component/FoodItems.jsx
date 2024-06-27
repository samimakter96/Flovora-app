import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../assets/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const handleToast = (name) => toast.success(`Added ${name}`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          // Filter the food items based on the selected category
          if (category === "All") {
            // If the selected category is 'All', include all food items
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            // Otherwise, include only the food items that match the selected category
            return category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase());
          }
        }).map((food) => {
          // Map through the filtered food items to render FoodCard components
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              img={food.img}
              description={food.desc}
              price={food.price}
              rating={food.rating}
              handleToast={handleToast}
            />
          );
        })}
      </div>
    </>
  );
};

export default FoodItems;

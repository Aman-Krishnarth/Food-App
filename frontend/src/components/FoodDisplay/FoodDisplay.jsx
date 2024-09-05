import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

function FoodDisplay({ category }) {
  const { foodList } = useContext(StoreContext);

  // id,name,price,description,image

  return (
    <div className="text-white mt-7">
      <h2 className="text-3xl font-semibold">Top dishes near you.</h2>
      <div className="foodDisplayList ">
        {foodList.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.imgUrl}
                className=""
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;

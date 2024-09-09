import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { Minus, Plus } from "lucide-react";
import { StoreContext } from "../../context/StoreContext";

function FoodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="foodItem w-full m-auto rounded-2xl h-full">
      <div className="relative">
        <img
          src={image}
          alt=""
          className="w-full rounded-[15px_15px_0px_0px] h-48"
        />

        {!cartItems[id] ? (
          <Plus
            onClick={() => addToCart(id)}
            className="cursor-pointer bg-white text-black rounded-full p-1 w-8 absolute right-4 bottom-4"
            size={30}
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 p-1 rounded-[50px] bg-white text-black">
            <Minus
              onClick={() => removeFromCart(id)}
              className="cursor-pointer bg-red-500 rounded-full p-1"
              size={30}
            />

            <p>{cartItems[id]}</p>

            <Plus
              onClick={() => addToCart(id)}
              className="cursor-pointer bg-green-500 rounded-full p-1"
              size={30}
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-2xl font-medium">{name}</h3>
        </div>
        <p className="text-[#676767] text-sm">{description}</p>
        <h4 className="text-[tomato] font-medium text-xl my-2">Rs. {price}</h4>
      </div>
    </div>
  );
}

export default FoodItem;

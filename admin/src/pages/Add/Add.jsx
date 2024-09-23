import React, { useEffect, useState } from "react";
import axios from "axios";

function Add() {
  const [image, setImage] = useState(false);

  const url = "https://food-app-backend-r2u6.onrender.com/";

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  function onChangeHandler(event) {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  }


  const onSumitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", +data.price);
    formData.append("category", data.category);
    formData.append("image", image);

    axios
      .post(`${url}/api/food/add`, formData)
      .then((res) => {
        if (res.data.success) {
          setData({
            name: "",
            description: "",
            price: "",
            category: "Salad",
          });
		  setImage(false)
        }
      })
      .catch((err) => {});
  };

  return (
    <div className="text-[#6d6d6d] w-[70%] ml-[max(5vw,25px)] mt-12 text-sm">
      <form action="" className="flex flex-col gap-5" onSubmit={onSumitHandler}>
        <div className="flex flex-col gap-2">
          <p>Upload Image</p>
          <label htmlFor="image" className=" w-fit">
            <img
              src={`${
                image
                  ? URL.createObjectURL(image)
                  : "https://imgs.search.brave.com/Hw5dkcrqboJ-RIsKsLymxoqEt_uDr3DyismTGmSD_Gg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzY1LzIyLzQx/LzM2MF9GXzU2NTIy/NDE4MF9RTlJpUlFr/ZjlGdzBkS1JvWkd3/VWtubW1mazUxU3VT/Uy5qcGc"
              }`}
              alt="dfsd"
              className="h-28 w-28  cursor-pointer"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
            className="cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-2 w-[max(40%,280px)]">
          <p>Product name</p>
          <input
            type="text"
            name="name"
            placeholder="Type Here"
            className="p-2"
            onChange={onChangeHandler}
            value={data.name}
          />
        </div>

        <div className="flex flex-col gap-2 w-[max(40%,280px)]">
          <p>Product Description</p>
          <textarea
            name="description"
            rows="6"
            placeholder="Write content here"
            required
            className="p-2"
            onChange={onChangeHandler}
            value={data.description}
          ></textarea>
        </div>

        <div className="flex gap-7">
          <div className="flex flex-col gap-5">
            <p>Product Category</p>
            <select
              name="category"
              className="w-max-28 p-2"
              onChange={onChangeHandler}
              value={data.category}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Dessert">Dessert</option>
              <option value="Pizza">Pizza</option>
              <option value="Burger">Burger</option>
              <option value="Tea">Tea</option>
              <option value="Pasta">Pasta</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Noodles">Noodles</option>
              <option value="Ice Cream">Ice Cream</option>
            </select>
          </div>

          <div className="flex flex-col gap-5">
            <p>Product Price</p>
            <input
              type="number"
              name="price"
              placeholder="Rs. 20"
              className="w-max-28 p-2"
              onChange={onChangeHandler}
              value={data.price}
            />
          </div>
        </div>
        <button
          type="submit"
          className="max-w-28 border-none p-2 bg-black text-white cursor-pointer"
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;

import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PlaceOrder() {
  const { getTotalCartAmount, token, foodList, cartItems, url } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onchangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    let orderItems = [];

    foodList.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;

        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });

    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      console.log(response.data.message);
    }
  };

  useEffect(() => {
    if (!token || !getTotalCartAmount()) {
      navigate("/cart");
    }
  }, []);

  return (
    <form
      className="flex items-start justify-between gap-12 mt-24 text-black"
      onSubmit={placeOrder}
    >
      <div className="w-full max-w-[max(30%,500px)]">
        <p className="text-3xl font-semibold mb-12">Delivery Information </p>

        <div className="flex gap-3">
          <input
            required
            type="text"
            placeholder="First Name"
            className="mb-4 w-full p-2 border-[1px_solid_#c5c5c5] rounded outline-[tomato]"
            name="firstName"
            value={data.firstName}
            onChange={onchangeHandler}
          />

          <input
            required
            type="text"
            placeholder="Last Name"
            className="mb-4 w-full p-2 border-[1px_solid_#c5c5c5] rounded outline-[tomato]"
            name="lastName"
            value={data.lastName}
            onChange={onchangeHandler}
          />
        </div>

        <input
          required
          type="email"
          placeholder="Email"
          className="mb-4 w-full p-2 border-[1px_solid_#c5c5c5] rounded outline-[tomato]"
          name="email"
          value={data.email}
          onChange={onchangeHandler}
        />
        <input
          required
          type="text"
          placeholder="Street"
          className="mb-4 w-full p-2 border-[1px_solid_#c5c5c5] rounded outline-[tomato]"
          name="street"
          value={data.street}
          onChange={onchangeHandler}
        />
        <div className="flex gap-3">
          <input
            required
            type="text"
            placeholder="City"
            className="mb-4 w-full p-2 border-[1px_solid_#c5c5c5] rounded outline-[tomato]"
            name="city"
            value={data.city}
            onChange={onchangeHandler}
          />

          <input
            required
            type="text"
            placeholder="State"
            className="mb-4 w-full p-2 border-[2px_solid_#c5c5c5] rounded outline-[tomato]"
            name="state"
            value={data.state}
            onChange={onchangeHandler}
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            type="text"
            placeholder="Zip Code"
            className="mb-4 w-full p-2 border-[1px_solid_#c5c5c5] rounded outline-[tomato]"
            name="zipcode"
            value={data.zipcode}
            onChange={onchangeHandler}
          />

          <input
            required
            type="text"
            placeholder="Country"
            className="mb-4 w-full p-2 border-[1px_solid_#c5c5c5] rounded outline-[tomato]"
            name="country"
            value={data.country}
            onChange={onchangeHandler}
          />
        </div>
        <input
          required
          type="text"
          placeholder="Phone"
          className="mb-4 w-full p-2 border-[1px_solid_#c5c5c5] rounded outline-[tomato]"
          name="phone"
          value={data.phone}
          onChange={onchangeHandler}
        />
      </div>

      <div className="w-full max-w-[max(40%,500px)]">
        <div className="flex flex-col gap-5  w-full">
          <h2>Cart Total: </h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal: </p>
              <p>Rs. {getTotalCartAmount()} </p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-[#555]">
              <p>Delievery Fee: </p>
              <p>Rs. {getTotalCartAmount() ? 2 : 0} </p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-[#555]">
              <strong>Total: </strong>
              <strong>
                Rs. {getTotalCartAmount() ? getTotalCartAmount() + 2 : 0}{" "}
              </strong>
            </div>
            <hr className="my-2" />
          </div>
          <button
            className="border-none text-white bg-[tomato] w-3/4 py-3 rounded cursor-pointer] mt-7"
            type="submit"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;

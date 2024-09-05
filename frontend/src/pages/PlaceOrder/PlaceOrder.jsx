import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="flex items-start justify-between gap-12 mt-24">
      <div className="w-full max-w-[max(30%,500px)]">
        <p className="text-3xl font-semibold mb-12">Delivery Information </p>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="mb-4 w-full p-2 border-[1px_solid_#c5c5c5] rounded outline-[tomato]"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="mb-4 w-full p-2 border-[1px_solid_#c5c5c5] rounded outline-[tomato]"
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full p-2 border-[1px_solid_#c5c5c5] rounded outline-[tomato]"
        />
        <input
          type="text"
          placeholder="Street"
          className="mb-4 w-full p-2 border-[1px_solid_#c5c5c5] rounded outline-[tomato]"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="mb-4 w-full p-2 border-[1px_solid_#c5c5c5] rounded outline-[tomato]"
          />

          <input
            type="text"
            placeholder="State"
            className="mb-4 w-full p-2 border-[2px_solid_#c5c5c5] rounded outline-[tomato]"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Zip Code"
            className="mb-4 w-full p-2 border-[1px_solid_#c5c5c5] rounded outline-[tomato]"
          />

          <input
            type="text"
            placeholder="Country"
            className="mb-4 w-full p-2 border-[1px_solid_#c5c5c5] rounded outline-[tomato]"
          />
        </div>
        <input
          type="text"
          placeholder="Phone"
          className="mb-4 w-full p-2 border-[1px_solid_#c5c5c5] rounded outline-[tomato]"
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
          <button className="border-none text-white bg-[tomato] w-3/4 py-3 rounded cursor-pointer] mt-7">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;

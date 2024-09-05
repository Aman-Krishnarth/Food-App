import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, foodList, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  function handleItemRemove(id) {
    removeFromCart(id);
  }

  return (
    <div className="mt-24 bg-white">
      <div>
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)] text-center">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />

        <hr className=" h-[1px] bg-[#e2e2e2] border-none" />

        {foodList.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="mt-2 text-black grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-center py-1">
                  <div className="w-1/2 m-auto">
                    <img src={item.imgUrl} alt="" className="h-full w-full" />
                  </div>

                  <p>{item.name}</p>
                  <p>Rs. {item.price}</p>
                  <p> {cartItems[item._id]} </p>

                  <p>Rs. {item.price * cartItems[item._id]} </p>

                  <p
                    className="cursor-pointer w-3/4 text-3xl m-auto py-5 hover:bg-red-400 hover:scale-110 hover:rounded duration-500 ease-in-out"
                    onClick={() => {
                      handleItemRemove(item._id);
                    }}
                  >
                    X
                  </p>
                </div>

                <hr className=" h-[1.5px] my-2 bg-[#e2e2e2] border-none " />
              </div>
            );
          }
        })}
      </div>

      <div className="mt-20 flex flex-col lg:flex-row justify-between gap-[max(12vw,20px)] ">
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
            className="border-none text-white bg-[tomato] w-1/2 py-3 rounded cursor-pointer]"
            onClick={() => navigate("/order")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="w-full">
          <div>
            <p className="text-[#555]">
              If you have a promo code, Enter it here
            </p>
            <div className="mt-2 flex justify-between items-center bg-[#eaeaea] rounded">
              <input
                type="text"
                placeholder="Promo code"
                className="bg-transparent outline-none pl-2 text-black"
              />
              <button className="w-[max(10vw,150px)] bg-black border-none py-4 p-1 rounded text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

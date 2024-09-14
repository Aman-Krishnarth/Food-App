import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";

function MyOrders() {
  const [data, setData] = useState([]);

  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );

    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className=" my-12">
      <h2>My Orders</h2>
      <div className="flex flex-col gap mt-7">
        {data.map((order, index) => {
          return (
            <div key={index} className="grid grid-cols-[1fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-y-1 lg:gap-7 text-sm py-2 px-5 text-[#454545] border border-solid border-[tomato]">
              <img
                src="https://imgs.search.brave.com/bdNhtYEGLSUvyCP5na8OGUNY32NXHbFpSdFw2X9HNAo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzEzLzYzLzg2/LzM2MF9GXzgxMzYz/ODYzOF80YWxjcTNV/WkNqenRHV0N3WmF3/OGRkZDBvV1pqSU9y/Yi5qcGc"
                alt=""
                className="w-12 lg:w-full h-12 lg:h-full"
              />

              <p className="">
                {" "}
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}{" "}
              </p>

              <p>Rs. {order.amount}.00</p>
              <p>Items: {order.items.length}</p>

			  <p > <span className="text-[tomato]">&#x25cf;</span> <b className="font-medium text-[#454545]">{order.status}</b> </p>

			  <button className="border-none py-3 rounded bg-[#ffe1e1] cursor-pointer text-[#454545]">Track Order</button>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyOrders;

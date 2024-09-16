import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    await axios
      .get("https://food-del-backend-cgwy.onrender.com/api/order/list")
      .then((res) => {
        console.log(res);
        setOrders(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const statusHandler = async (event,orderId)=>{
	const response = await axios.post("https://food-del-backend-cgwy.onrender.com/api/order/status",{orderId, status:event.target.value})

	if(response.data.success){
		await fetchAllOrders()
	}

  }

  return (
    <div className=" w-full p-7">
      <h3>Order Page</h3>

      <div className="w-full">
        {orders.map((order) => {
          return (
            <div
              key={order._id}
              className="grid grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-7 border border=solid border-[tomato] py-4 px-2 lg:p-5 my-7 text-sm lg:text-base text-[#505050] "
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/2420/2420464.png"
                alt=""
              />

              <div>
                <p className="font-semibold">
                  {" "}
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x  " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + " , ";
                    }
                  })}{" "}
                </p>

                <p className="font-semibold mt-7 mb-1">
                  {order.address.firstName + " " + order.address.lastName}
                </p>

                <div className="mb-2">
                  <p>{order.address.street + ","}</p>
                  <p>
                    {order.address.city +
                      ", " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      ", " +
                      order.address.zipcode}
                  </p>
                </div>

                <p>{order.address.phone}</p>
              </div>

              <p>Items: {order.items.length}</p>

              <p> Rs. {order.amount} </p>

              <select className="text-black bg-[#ffe8e4] border border-solid border-[tomato] w-[max(10vw,120px)] p-1 lg:p-2 outline-none cursor-pointer text-sm lg:text-base"
			 onChange={(event)=>statusHandler(event,order._id)} 
			 value={order.status}
			  >
                <option value="Food Processing" className="cursor-pointer">Food Processing</option>
                <option value="Out for delivery" className="cursor-pointer">Out for delivery</option>
                <option value="Delivered" className="cursor-pointer">Delivered</option>
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;

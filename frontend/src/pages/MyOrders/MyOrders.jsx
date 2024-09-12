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
    console.log(response.data.data)
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div>
        <h2>My Orders</h2>
        <div>
            {
                data.map((order,index)=>{
                    return (
                        <div key={index}>

                        </div>
                    )
                })
            }
        </div>
    </div>
  );
}

export default MyOrders;

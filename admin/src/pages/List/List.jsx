import React, { useEffect, useState } from "react";
import axios from "axios";

function List() {
  const url = "https://food-app-backend-r2u6.onrender.com";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    axios.get(`${url}/api/food/list`).then((res) => {
      if (res.data.success) {
        setList(res.data.data);
      }
    });
  };

  const removeFood = async (foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList()
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <p>All Foods</p>
      <div className="w-full">
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2 py-3 px-4 border border-solid border-[#cacaca] text-sm w-full">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2 py-3 px-4 border border-solid border-[#cacaca] text-sm w-full"
            >
              <img
                src={`${url}/images/` + item.image}
                alt=""
                className="w-12"
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>Rs.{item.price}</p>
              <p className="cursor-pointer" onClick={()=>removeFood(item._id)}>X</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;

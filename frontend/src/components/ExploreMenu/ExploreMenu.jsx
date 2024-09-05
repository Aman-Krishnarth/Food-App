import React from "react";
import menuList from "../../data/menuList.json";
import "./ExploreMenu.css";

function ExploreMenu({category, setCategory}) {
  return (
    <div className="text-white flex flex-col gap-5" id="menu">
      <h1 className="text-[#262626] font-medium text-4xl">Explore Our menu</h1>
      <p className="max-w-[60%] text-[#808080]">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>

      <div className="menuList flex justify-between items-center gap-8 text-center my-5 overflow-x-scroll">
        {menuList.map((item, index) => {
          return (
            <div key={index} onClick={()=> setCategory( prev => prev === item.title ? "All" : item.title)}>
              <div className="h-32 w-[7.5vw] min-w-20 cursor-pointer ">
                <img
                  src={item.imgUrl}
                  alt=""
                  className={`h-full w-full rounded-[50%] ${category === item.title ? "border-4 border-[tomato] p-[2px]" : ""} `}
                />
              </div>
              <h3 className="mt-2 text-[#747474] cursor-pointer text-xl">{item.title}</h3>
            </div>
          );
        })}
      </div>
      <hr className="my-2 h-[2px] bg-[#e2e2e2] border-none"/>
    </div>
  );
}

export default ExploreMenu;

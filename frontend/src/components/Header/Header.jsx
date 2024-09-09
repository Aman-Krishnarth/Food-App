import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header h-[34vw] mx-auto my-7 relative ">
      <div className=" absolute h-full w-full z-10 ">
        <img
          src="https://t4.ftcdn.net/jpg/07/78/79/33/240_F_778793377_3pw6VeOH3JauyQjhQNFwhZ7GFB0GNyX6.jpg"
          alt=""
          className="h-full w-full rounded-2xl"
        />
      </div>
      <div className="z-20 absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]">
        <h2 className="text-white text-6xl font-semibold tracking-wide">
          Order your favorite food here
        </h2>
        <p className="text-xl font-medium tracking-normal text-white">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delcious meal at a time.
        </p>
        <button className=" border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-[1vw] rounded-[50px]">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;

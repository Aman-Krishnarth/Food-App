import React, { useState } from "react";
import { Search, ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("Home");

  return (
    <nav className=" py-5 flex justify-between items-center ">
      <div className="h-28 w-48">
        <img
          src="https://imgs.search.brave.com/fKK6OKSaVT5u6GzkV0rAfEkqfApTB1CzLjTSHyycvOE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQzLzY0/LzIyLzQzNjQyMmVl/YWMzYjNkNzliNjdl/MmQzY2ZhNTNiNDRm/LmpwZw"
          alt=""
          className="h-full w-full"
        />
      </div>

      <ul className="flex gap-5 text-[#49557e] text-xl">
        <li
          className={`${
            menu === "Home"
              ? "pb-[2px] border-b border-solid border-[#49557e]"
              : ""
          } hover:cursor-pointer`}
          onClick={() => {
            setMenu("Home");
          }}
        >
          <Link to="/">Home</Link>
        </li>
        <a
          href="#menu"
          className={`${
            menu === "Menu"
              ? "pb-[2px] border-b border-solid border-[#49557e]"
              : ""
          } hover:cursor-pointer`}
          onClick={() => {
            setMenu("Menu");
          }}
        >
          Menu
        </a>
        <a
          href="#footer"
          className={`${
            menu === "Contact"
              ? "pb-[2px] border-b border-solid border-[#49557e]"
              : ""
          } hover:cursor-pointer`}
          onClick={() => {
            setMenu("Contact");
          }}
        >
          Contact Us
        </a>
      </ul>

      <div className="flex items-center gap-10">
        <Search size={35} />
        <Link to="/cart" className=" relative ">
          <ShoppingBasket size={35} />
          <div className="h-3 w-3 bg-[tomato] rounded-md absolute top-[-8px] right-[-8px]"></div>
        </Link>

        <button
          className="bg-red-400 bg-transparent text-base text-[#49557e] border border-solid border-[tomato] py-3 px-8 rounded-[50px] hover:bg-[#fff4f2] duration-300 ease-in-out"
          onClick={() => setShowLogin(true)}
        >
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

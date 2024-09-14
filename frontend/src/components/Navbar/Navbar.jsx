import React, { useContext, useState } from "react";
import { Search, ShoppingBasket } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Navbar.css";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("Home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

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
          <div
            className={
              getTotalCartAmount()
                ? "h-3 w-3 bg-[tomato] rounded-md absolute top-[-8px] right-[-8px] animate-bounce "
                : ""
            }
          ></div>
        </Link>

        {!token && !localStorage.getItem("token") ? (
          <button
            className="bg-red-400 bg-transparent text-base text-[#49557e] border border-solid border-[tomato] py-3 px-8 rounded-[50px] hover:bg-[#fff4f2] duration-300 ease-in-out"
            onClick={() => setShowLogin(true)}
          >
            Sign in
          </button>
        ) : (
          <div className="relative navbarProfile hover:cursor-pointer">
            <img
              src="https://imgs.search.brave.com/NLvoeeWrIirNTadp9zD1n3QlRhPHiZdYWPt3IlWSM9k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzYyLzYzLzY1/LzM2MF9GXzQ2MjYz/NjUwMl85Y0RBWXV5/VnZCWTRxWUpsSGpX/N3ZxYXI1SFlTOGg4/eC5qcGc"
              alt=""
              className="h-12 w-12"
            />
            <ul className="navbarProfileDropDown py-3 px-6">
              <li className="flex gap-2 items-center hover:cursor-pointer hover:text-[tomato]"
              onClick={()=>navigate("/myorders")}
              >
                {" "}
                <img
                  src="https://imgs.search.brave.com/qM1naN6jZNKXzRho06G2UYA2WZLTGJY5qGCY7MHSA0s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvaGVyb2ljb25z/LXVpLzI0L3Nob3Bw/aW5nLWJhZy01MTIu/cG5n"
                  alt=""
                  className="h-1/3 w-1/3"
                />{" "}
                <p className="">Orders</p>
              </li>
              <hr />
              <li
                className="flex gap-2 items-center hover:cursor-pointer hover:text-[tomato]"
                onClick={logout}
              >
                {" "}
                <img
                  src="https://imgs.search.brave.com/EbIpx30EHh6PRlKRNf2c9nrc0gDBzg2YQ2btgDjSqO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzUyLzI2Lzgw/LzM2MF9GXzU1MjI2/ODAzMF9SU3YzMGty/S3JISU5DbnFpVERP/SllDR3FVRXlpY0lV/Mi5qcGc"
                  alt=""
                  className="h-1/3 w-1/3"
                />{" "}
                <p className="">Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

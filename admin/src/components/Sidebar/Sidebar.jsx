import React from "react";
import { CirclePlus, SquareCheckBig } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"

function Sidebar() {
  return (
    <aside className="w-[18%] min-h-screen border-[1.5px] border-[#a9a9a9] border-solid border-t-0 text-[max(1vw,10px)]">
      <div className="pt-12 pl-[20%] flex flex-col gap-5">
        <NavLink
          to="/add"
          className={`flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 py-2 px-3 rounded-[3px_0px_0px_3px] cursor-pointer `}
        >
          <CirclePlus />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className="flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 py-2 px-3 rounded-[3px_0px_0px_3px] cursor-pointer"
        >
          <SquareCheckBig />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          to="/order"
          className="flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 py-2 px-3 rounded-[3px_0px_0px_3px] cursor-pointer"
        >
          <SquareCheckBig />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;

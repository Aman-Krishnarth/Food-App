import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-2 px-[4%]">
      <div className="h-20 w-36">
        <img
          src="https://imgs.search.brave.com/fKK6OKSaVT5u6GzkV0rAfEkqfApTB1CzLjTSHyycvOE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQzLzY0/LzIyLzQzNjQyMmVl/YWMzYjNkNzliNjdl/MmQzY2ZhNTNiNDRm/LmpwZw"
          alt=""
          className="h-full w-full"
        />
      </div>
      <div className="h-20 w-20">
        <img
          src="https://imgs.search.brave.com/KO6U-LW8DAiv7jB13VFKnSBRVuKim4lkWJLUm8SvqTk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI4/NTEyNDI3NC9waG90/by9taWRkbGUtYWdl/LW1hbi1wb3J0cmFp/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9RDE0bTY0VUNo/Vlp5UmhBcjZNSlcz/Z3VvN01LUWJLdmdO/VmRLbXNnUV8xZz0"
          alt=""
		  className="h-full w-full rounded-full"
        />
      </div>
    </nav>
  );
}

export default Navbar;

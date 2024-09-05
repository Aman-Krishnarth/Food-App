import React from "react";

function Footer() {
  return (
    <footer
      className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 mt-24"
      id="footer"
    >
      <div className="w-full grid md:grid-cols-[2fr_1fr_1fr] gap-20">
        <div className="flex flex-col items-start gap-5">
          <div className="h-20 w-1/2">
            <img
              src="https://imgs.search.brave.com/fKK6OKSaVT5u6GzkV0rAfEkqfApTB1CzLjTSHyycvOE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQzLzY0/LzIyLzQzNjQyMmVl/YWMzYjNkNzliNjdl/MmQzY2ZhNTNiNDRm/LmpwZw"
              alt=""
              className="h-full w-full"
            />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            doloribus culpa soluta dolorem earum similique aliquid assumenda
            voluptate, saepe nihil ipsa aliquam eaque delectus sunt,
            exercitationem ab alias maiores illo?
          </p>

          <div>
            <div className="h-12 w-12 inline-block mr-5">
              <img
                src="https://imgs.search.brave.com/SQsaFNKXL9x2pacICOrPpnY5c1-Eee1Vf0jOmntInaM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
                alt="LinkedIn"
                className="h-full w-full"
              />
            </div>
            <div className="h-12 w-12 inline-block mr-5">
              <img
                src="https://imgs.search.brave.com/MMmOkchhxhGPcIDTpif9ud7kCm6t4Q5aUscYatv8jC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzM3LzM1LzU5/LzM2MF9GXzgzNzM1/NTk1OF9Qdno2bHhC/VjZrdDJUNkYzWkRz/N1M3bWhaN2p1OFhQ/NC5qcGc"
                alt="Instagram"
                className="bg-transparent"
              />
            </div>
            <div className="h-12 w-12 inline-block mr-5">
              <img
                src="https://imgs.search.brave.com/ppRXxzu6TObkBdVFaEGiWjh8rVSN8UIUIgOZoEPJmCI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZmL0xvZ29fb2Zf/VHdpdHRlci5zdmc"
                alt="Twitter"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white text-2xl font-bold">COMPANY</h2>
          <ul>
            <li className="mb-2 cursor-pointer hover:underline">Home</li>
            <li className="mb-2 cursor-pointer hover:underline">About us</li>
            <li className="mb-2 cursor-pointer hover:underline">Delivery</li>
            <li className="mb-2 cursor-pointer hover:underline">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white text-2xl font-bold">GET IN TOUCH</h2>
          <ul>
            <li className="mb-2 cursor-pointer hover:underline">
              +91-0987654321
            </li>
            <li className="mb-2 cursor-pointer hover:underline">
              example@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] my-5 bg-white border-none" />
      <p>Copyright 2024 c Tomato.com - All Right Reserved.</p>
    </footer>
  );
}

export default Footer;

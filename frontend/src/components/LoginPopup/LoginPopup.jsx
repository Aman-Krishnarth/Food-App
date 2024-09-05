import React, { useState } from "react";
import { X } from "lucide-react";

function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("signUp");

  return (
    <div className="absolute z-50 w-full h-full bg-[#00000090] grid">
      <form className="place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6 py-6 px-7 rounded-lg text-base">
        <div className="flex justify-between items-center text-black">
          <h2 className="text-2xl font-bold tracking-wider">{currentState.toUpperCase()}</h2>

          <X onClick={() => setShowLogin(false)} className="cursor-pointer w-9 bg-red-500 rounded-lg hover:scale-110 duration-300 ease-in-out" />

        </div>
        <div className="flex flex-col gap-5">
          {currentState === "signUp" ? (
            <input type="text" placeholder="User Name" required 
            className="outline-none border border-solid border-[#c9c9c9] p-2 rounded"
            />
          ) : null}

          <input type="email" placeholder="Email bitch" required 
          className="outline-none border border-solid border-[#c9c9c9] p-2 rounded"
          />
          <input type="password" placeholder="Password" required 
          className="outline-none border border-solid border-[#c9c9c9] p-2 rounded"
          />
        </div>
        <button className="border-none p-2 rounded text-white bg-[tomato] text-sm cursor-pointer">
          {currentState === "signUp" ? "Create Account" : "login"}
        </button>

        <div className="flex items-start gap-2 mt-[-15px]">
          <input type="checkbox" name="" id="" required 
          className="mt-[5px]"
          />

          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currentState === "login" ? (
          <p  >
            Create a new account?{" "}
            <span className="text-[tomato] font-semibold cursor-pointer" onClick={() => setCurrentState("signUp")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span className="text-[tomato] font-semibold cursor-pointer" onClick={() => setCurrentState("login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;

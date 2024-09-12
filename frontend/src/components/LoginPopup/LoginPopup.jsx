import React, { useContext, useState } from "react";
import { X } from "lucide-react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("signUp");

  const { url, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  const onLogin = async (e) => {
    e.preventDefault();

    let newUrl = url;

    if (currentState === "login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    await axios
      .post(newUrl, data)
      .then((res) => {
        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          setShowLogin(false);
        } else {
            alert(res.data.message);
        }
      })

      .catch((err) => {
        console.log("LOGIN AXIOS ERROR");
      });
  };

  return (
    <div className="absolute z-50 w-full h-full bg-[#00000090] grid">
      <form
        onSubmit={onLogin}
        className="place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6 py-6 px-7 rounded-lg text-base"
      >
        <div className="flex justify-between items-center text-black">
          <h2 className="text-2xl font-bold tracking-wider">
            {currentState.toUpperCase()}
          </h2>

          <X
            onClick={() => setShowLogin(false)}
            className="cursor-pointer w-9 bg-red-500 rounded-lg hover:scale-110 duration-300 ease-in-out"
          />
        </div>
        <div className="flex flex-col gap-5">
          {currentState === "signUp" ? (
            <input
              type="text"
              placeholder="User Name"
              required
              className="outline-none border border-solid border-[#c9c9c9] p-2 rounded"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
            />
          ) : null}

          <input
            type="email"
            placeholder="Email"
            required
            className="outline-none border border-solid border-[#c9c9c9] p-2 rounded"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none border border-solid border-[#c9c9c9] p-2 rounded"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
          />
        </div>
        <button className="border-none p-2 rounded text-white bg-[tomato] text-sm cursor-pointer">
          {currentState === "signUp" ? "Create Account" : "login"}
        </button>

        <div className="flex items-start gap-2 mt-[-15px]">
          <input type="checkbox" name="" id="" required className="mt-[5px]" />

          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currentState === "login" ? (
          <p>
            Create a new account?{" "}
            <span
              className="text-[tomato] font-semibold cursor-pointer"
              onClick={() => setCurrentState("signUp")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="text-[tomato] font-semibold cursor-pointer"
              onClick={() => setCurrentState("login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;

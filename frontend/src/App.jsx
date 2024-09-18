import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { StoreContext } from "./context/StoreContext";
import axios from "axios";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  const { url } = useContext(StoreContext);

  useEffect(() => {
    async function runBackend() {
      await axios.get(url).then((res) => {
        setShowLoading(false);
      });
    }

    runBackend();
  }, []);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}

      {showLoading ? (
        <div className="flex flex-col h-screen w-screen items-center justify-center">
          <button
            type="button"
            className="flex items-center rounded-lg bg-green-700 px-4 py-2 text-white"
            disabled
          >
            <svg
              className="mr-3 h-7 w-7 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="font-medium text-3xl"> Loading... </span>
          </button>
          <p className="text-[red] text-center text-xl">
            Hang tight! This might take 15-20 seconds to load. Your patience is
            appreciated!
          </p>
        </div>
      ) : (
        <>
          {" "}
          <div className="w-[80%] m-auto">
            <Navbar setShowLogin={setShowLogin} />
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

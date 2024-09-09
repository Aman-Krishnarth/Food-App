import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

function App() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>

    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : null}

      <div className="w-[80%] m-auto">
        <Navbar setShowLogin={setShowLogin}/>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;

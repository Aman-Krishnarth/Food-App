import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import StoreContextProvider from "./context/StoreContext.jsx";
import Verify from "./pages/Verify/Verify.jsx";
import MyOrders from "./pages/MyOrders/MyOrders.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <PlaceOrder />,
      },
      {
        path: "/verify",
        element: <Verify/>
      },
      {
        path: "/myorders",
        element: <MyOrders/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StoreContextProvider>
    <RouterProvider router={router} />
  </StoreContextProvider>
);

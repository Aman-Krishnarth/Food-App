import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null);
import axios from "axios";

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [foodList, setFoodList] = useState([]);

  const fetchFoodList = async () => {
    axios
      .get(url + "/api/food/list")
      .then((res) => {
        setFoodList(res.data.data);
      })
      .catch((err) => {
        console.log("FETCH FOOD LIST CATCH");
      });
  };

  const loadCartData = async (token)=>{
    const response = await axios.post(url+"/api/cart/get",{},{headers: {token}});

    setCartItems(response.data.cartData)

  }

  useEffect(() => {
    fetchFoodList();

    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))

      loadCartData(localStorage.getItem("token"))

    }

  }, []);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart =async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if(token){
      axios.post(url+"/api/cart/remove"),{itemId},
      {headers: {token}}
    }

  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = foodList.find((product) => product._id === item);

        totalAmount += itemInfo.price * cartItems[item];
      }
    }

    return totalAmount;
  };

  const contextValue = {
    foodList,
    addToCart,
    removeFromCart,
    cartItems,
    setCartItems,
    getTotalCartAmount,
    url,
    setToken,
    token,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

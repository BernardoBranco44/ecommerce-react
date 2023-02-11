import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

function getDefaultCart() {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

export default function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  function AddToCart(id) {
    setCartItems((prevValue) => ({
      ...prevValue,
      [id]: prevValue[id] + 1,
    }));
  }

  function RemoveFromCart(id) {
    setCartItems((prevValue) => ({
      ...prevValue,
      [id]: prevValue[id] - 1,
    }));
  }

  function updateCartCount(newAmount, id) {
    setCartItems((prevValue) =>({...prevValue, [id]: newAmount}))
  }

  function getTotalAmount() {
    let totalAmount = 0;
    for (const item in cartItems){
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount
  }

  const contextValue = { cartItems, AddToCart, RemoveFromCart, updateCartCount, getTotalAmount };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

import { PRODUCTS } from "../../products";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";

import { useNavigate } from "react-router-dom";

export default function Cart() {

  const {cartItems, getTotalAmount} = useContext(ShopContext)
  const totalAmount = getTotalAmount()

  const navigate = useNavigate()

  return (
    <div className="cart">
        <h1>Your Cart Items</h1>
      <div className="cart-items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem data={product}/>
          }
        })}
      </div>
    {totalAmount > 0 ?
      <div className="checkout">
        <p>Subtotal: {totalAmount}€</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      :
      <h1>Your cart is Empty</h1>
    }
    </div>
  )
}

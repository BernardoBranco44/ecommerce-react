import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export default function CartItem(props) {

  const {cartItems, AddToCart, RemoveFromCart, updateCartCount} = useContext(ShopContext)
  const {id, productName, price, productImage} = props.data

  return (
    <div className="cart-item">
      <img src={productImage}/>
      <div className="description">
        <p><b>{productName}</b></p>
        <p>{price}€</p>
        <div className="countHandler">
          <button onClick={() => RemoveFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(event) => updateCartCount(Number(event.target.value), id)}></input>
          <button onClick={() => AddToCart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}

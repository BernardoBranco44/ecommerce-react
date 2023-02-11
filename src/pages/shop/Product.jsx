import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export default function Product(props) {
  const {id, productName, price, productImage} = props.data

  const {AddToCart, cartItems} = useContext(ShopContext)
  const cartItemAmount = cartItems[id]

  return (
    <div className="product">
      <img src={productImage}/>
      <div>
        <p><b>{productName}</b></p>
        <p>{price}€</p>
      </div>
      <button className="add-cart-btn" onClick={() => AddToCart(id)}>
        Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
    </div>
  )
}

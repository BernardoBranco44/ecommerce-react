import {PRODUCTS} from "../../products";
import Product from "./Product"

export default function Shop() {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1>El Pollo Loco</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => <Product key={product.id} data={product}/>)}
      </div>
    </div>
  )
}

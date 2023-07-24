
import React, { useState} from "react";

function Item({ name, category }) {

  const [cartChange, cartStat] = useState(false)

 function addToCart(){
  cartStat((cartChange) => cartChange = !cartChange)
 }

  const addingCart = cartChange ? "in-cart" : " ";

  return (
    <li className={addingCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{cartChange ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

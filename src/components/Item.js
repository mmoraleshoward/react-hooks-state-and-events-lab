import React, { useState } from "react";

function Item({ name, category }) {

const [productName, addToCart] = useState(false);

function addingProduct(){
  addToCart((productName) => !productName)
}

const cartChange = productName ? "in-cart" : " "

  return (
    <li className={cartChange}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addingProduct}>{ productName ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;

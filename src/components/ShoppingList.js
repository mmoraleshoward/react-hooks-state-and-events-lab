import React, { useState } from "react";
import Item from "./Item";
import { waitForDomChange } from "@testing-library/react";

function ShoppingList({ items }) {

  const [selectedCategory, catFilter] = useState("All")

  function filteredCategory(event){
    catFilter(event.target.value)
  }



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

import React, { useState } from "react";
import Item from "./Item";



function ShoppingList({ items }) {

const [selectedCategory, setCategoryBy] = useState("All");

function chooseCategory(category){
  return setCategoryBy(category.target.value)
  
}
const categoryFilter = items.filter((items) => {
  if (selectedCategory === "All"){
    return true;
  }
  else {
    return items.category === selectedCategory;
  }
})

function filteredList(categoryFilter){
  return (
    categoryFilter.map((item) => {
    return <Item key={item.id} name={item.name} category={item.category}  />
  })
  )
}

const finalList = filteredList(categoryFilter)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={chooseCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
       {finalList} 
      </ul>
    </div>
  );
}

export default ShoppingList;

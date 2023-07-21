import React, { useState } from "react";

function Item({ name, category }) {
  const [cart,setCart]=useState(false)
  const itemClass= cart ? "in-cart" : ""
  function toggleCart(){
    setCart(!cart)
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>Add to Cart</button>
    </li>
  );
}

export default Item;

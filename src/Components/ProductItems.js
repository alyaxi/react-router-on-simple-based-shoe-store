import React from 'react';
import { useParams } from "react-router-dom";
import Shoes from "./../shoes.json";




function ProductItems() {
  const { id } = useParams();
  const shoe = Shoes[id]
  if(!shoe)
  return <h2>Product not found</h2>
  console.log(shoe);
  return (
    <div>
      <h1>Welcome to My Product Items</h1>
      <div  className="Link">
              <h4> {shoe.name} </h4>
              <img src={shoe.img} height={500} alt="shoe" />
            </div>
    </div>
  );
}

export default ProductItems;

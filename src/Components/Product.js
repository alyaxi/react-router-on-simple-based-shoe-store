import React from "react";
import Shoes from "./../shoes.json";
import { Link } from "react-router-dom";

function Product() {
  console.log(Shoes);
  console.log(Object.keys(Shoes));
  return (
    <div>
      <h1>Welcome to My Product</h1>
      <div className="ProductCOntainer">
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <Link key={keyName} className="Link" to={`/product/${keyName}`}>
              <h4> {shoe.name} </h4>
              <img src={shoe.img} height={250} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Product;

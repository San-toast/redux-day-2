import React from "react";
import Products from "./Products";
import { useSelector } from "react-redux";

export default function ProductContainer() {
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <div className="productContainer">
      {products?.map((product) => (
        <Products product={product} />
      ))}
    </div>
  );
}

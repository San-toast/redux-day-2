import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart?.map((item) => (
        <CartItem product={item} />
      ))}
      <a href="/">Return to Products</a>
    </div>
  );
}

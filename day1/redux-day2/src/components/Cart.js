import "../App.css";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="notApp">
      <h1>Cart</h1>
      <div className="cartLayout">
        <div className="cart">
          {cart?.map((item) => (
            <CartItem product={item} />
          ))}
        </div>
      </div>
      <a href="/">Return to Products</a>
    </div>
  );
}

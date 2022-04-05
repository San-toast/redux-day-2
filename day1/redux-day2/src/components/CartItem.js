import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CartItem(props) {
  const dispatch = useDispatch();
  const removeFromCart = (dispatch, product) => {
    dispatch({ type: "REMOVE", payload: product });
  };
  return (
    <div className="cartProduct">
      <img className="productImage" src={props?.product?.img} alt="" />
      <h4>{props?.product?.name}</h4>
      <p>${props?.product?.price}</p>
      <button onClick={() => removeFromCart(dispatch, props.product)}>
        Remove
      </button>
    </div>
  );
}

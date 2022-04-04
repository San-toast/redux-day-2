import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function Products(props) {
  const dispatch = useDispatch();

  const addToCart = (dispatch, product) => {
    toast(`Added ${product.name} to my cart!`);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <div className="singleProduct">
      <img className="productImage" src={props?.product?.img} alt="" />
      <h4>{props?.product?.name}</h4>
      <p>${props?.product?.price}</p>
      <button onClick={() => addToCart(dispatch, props.product)}>
        Add To Cart
      </button>
    </div>
  );
}

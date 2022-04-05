import storage from "redux-persist/lib/storage";
const initialState = {
  products: [
    {
      name: "Screwdriver",
      img: "https://images.unsplash.com/photo-1524224313114-ebd9c49dde82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 3,
    },
    {
      name: "Hammer",
      img: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 5,
    },
    {
      name: "Drill",
      img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      price: 7,
    },
    {
      name: "Drill Bit",
      img: "https://images.unsplash.com/photo-1569338270981-4159a7818c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      price: 7,
    },
    {
      name: "Tool Box",
      img: "https://images.unsplash.com/photo-1585569695919-db237e7cc455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      price: 7,
    },
    {
      name: "Pliers",
      img: "https://images.unsplash.com/photo-1586374579231-32db331d5b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      price: 7,
    },
  ],
  cart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "RESET":
      storage.removeItem("persist:root");
      return {
        ...initialState,
      };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload),
      };

    default:
      return state;
  }
}
export default rootReducer;

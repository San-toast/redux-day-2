import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import ProductContainer from "./components/ProductContainer";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const reset = (dispatch, product) => {
    dispatch({ type: "RESET", payload: product });
  };
  return (
    <div className="App">
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1>Joe's Handy Dandy Tools 🧰</h1>
      <button onClick={() => reset(dispatch)}>RESET</button>
      <h1>Products</h1>
      <div className="LayoutContainer">
        <ProductContainer />
      </div>
      <a href="/cart">View Cart</a>
    </div>
  );
}

export default App;

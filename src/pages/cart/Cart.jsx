import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct, getUserCart } from "../../services/get";
import { initializeCart } from "../../store";

import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.value);
  const userId = 2;

  useEffect(() => {
    // Fetches cart of the user from API which is an array
    getUserCart(userId).then((res) => {
      const cartArr = res[0].products;
      // Iterating through the response array to fetch the product details based on productID
      // Here in the variable Promises will be stored
      const cartProductDetailsPromise = cartArr.map((item) => {
        return getSingleProduct(item.productId).then((res) => res);
      });
      // Here we are resolving all the promises to get the data and dispatching the data to initialize the cart store.
      Promise.all(cartProductDetailsPromise).then(cartProductDetails=>{
        dispatch(initializeCart(cartProductDetails));
      })
    });
  }, [dispatch]);

  return (
    <div>
        <ul>
            {cartProducts?.map((product, key)=>{
                return <li key={key}>{product.title}</li>
            })}
        </ul>
    </div>
  )
};

export default Cart;

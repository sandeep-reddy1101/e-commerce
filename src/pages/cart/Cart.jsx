import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct, getUserCart } from "../../services/get";
import { initializeCart } from "../../store";

import "./cart.css";

import CartProduct from "./Cart-product";
import CartCheckout from "./Cart-checkout";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.value);

  // Hard coding the userId value
  // In future write the logic to get the userId based on logged in user.
  const userId = 2;

  useEffect(() => {
    // Fetches cart of the user from API which is an array
    getUserCart(userId)
      .then((res) => {
        const cartArr = res[0].products;
        // Iterating through the response array to fetch the product details based on productID
        // Here in the variable Promises will be stored
        const cartProductDetailsPromise = cartArr.map((item) => {
          return getSingleProduct(item.productId).then((res) => {
            res["quantity"] = item.quantity;
            return res;
          });
        });
        // Here we are resolving all the promises to get the data and dispatching the data to initialize the cart store.
        Promise.all(cartProductDetailsPromise).then((cartProductDetails) => {
          dispatch(initializeCart(cartProductDetails));
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  // If there are products in cart then displaying the products or else displaying cart is empty text
  return (
    <div>
      {cartProducts.length > 0 ? (
        <div className="row mx-3 mt-3 gx-5">
          <div className="col-12 col-lg-8">
            <div className="cart-products-container">
              {cartProducts.map((product, key) => {
                return (
                  <div key={key}>
                    <CartProduct product={product} />;
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="checkout-container">
              <CartCheckout cartProducts={cartProducts} />
            </div>
          </div>
        </div>
      ) : (
        <div className="row mt-5 mx-5 empty-cart">
          <div className="col-12">
            <div className="p-5 ">
              <h3 className="text-center">Your cart is empty.</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

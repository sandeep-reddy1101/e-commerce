import {  useSelector } from "react-redux";

import "./cart.css";

import CartProduct from "./Cart-product";
import CartCheckout from "./Cart-checkout";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.value);

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

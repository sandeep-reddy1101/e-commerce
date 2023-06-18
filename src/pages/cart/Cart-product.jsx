import { useDispatch } from "react-redux";
import "./cart.css";

import {
  removeProductFromCart,
  updateQuantityOfProductInCart,
} from "../../store";

const CartProduct = (_props) => {
  const { product } = _props;
  const dispatch = useDispatch();

  // Function which is called when user click on delete button 
  // It will call removeProductFromCart resolver in the store 
  // to remove the product from the cart based on product Id which we will send through action payload
  const deleteProductFromCart = () => {
    const actionPayload = { productId: product.id };
    dispatch(removeProductFromCart(actionPayload));
  };

  // This function is called when user changes the quantity of product in the cart.
  // It will call updateQuantityOfProductInCart resolver in the store to updated the product quantity in cart
  // Based on product ID and quantity which we will send through action payload.
  const updateCartProductQuantity = (quantityValue) => {
    const actionPayload = { productId: product.id, quantity: quantityValue };
    dispatch(updateQuantityOfProductInCart(actionPayload));
  };

  return (
    <div className="row shadow p-3 mb-2 bg-body-tertiary rounded">
      <div className="col-4">
        <img
          src={product.image}
          alt={product.title}
          className="cart-product-image"
        />
      </div>
      <div className="col-8">
        <div className="cart-product-details p-3">
          <div className="cart-product-info">
            <h4>{product.title}</h4>
            <small className="text-success">In Stock</small>
            <p className="fw-bold">${product.price}</p>
            <div className="d-flex mb-1">
              <p className="pt-1">Quantity: </p>
              <div>
                <select
                  defaultValue={product.quantity}
                  className="form-select cart-product-quantity"
                  aria-label="Default select example"
                  onChange={(e) => {
                    updateCartProductQuantity(e.target.value);
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => {
                    return (
                      <option value={item} key={key + 1}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={deleteProductFromCart}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

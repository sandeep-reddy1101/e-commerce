import { useDispatch, useSelector } from "react-redux";
import "./cart.css";

import {
  removeProductFromCart,
  updateQuantityOfProductInCart,
} from "../../store";
import { Link } from "react-router-dom";
import { changeQuantityofProductInCart } from "../../services/post";
import { deleteProductFromUserCart } from "../../services/delete";

const CartProduct = (_props) => {
  const { product } = _props;
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.value);

  // Function which is called when user click on delete button 
  // It will call removeProductFromCart resolver in the store 
  // to remove the product from the cart based on product Id which we will send through action payload
  const deleteProductFromCart = () => {
    const actionPayload = { productId: product._id };
    try {
      deleteProductFromUserCart(userData.data._id, actionPayload.productId).then((response) => {
        if(response.cartUpdated){
          dispatch(removeProductFromCart(actionPayload));
        }else{
          throw Error("Some error occured in the backend API");
        }
      }).catch((err) => {
        console.log(err.message)
      })
    }catch (err){
      console.log(err.message)
    }
  };

  // This function is called when user changes the quantity of product in the cart.
  // It will call updateQuantityOfProductInCart resolver in the store to updated the product quantity in cart
  // Based on product ID and quantity which we will send through action payload.
  const updateCartProductQuantity = (quantityValue) => {
    const actionPayload = { productId: product._id, quantity: quantityValue };
    try {
      changeQuantityofProductInCart(userData.data._id, actionPayload.productId, actionPayload.quantity).then((response)=>{
        if(response.cartUpdated){
          dispatch(updateQuantityOfProductInCart(actionPayload));
        }else{
          throw Error("Some error occured in backend");
        }
      }).catch((err)=>{
        console.log(err.message)
      })
    }catch(err) {
      console.log(err.message)
    }
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
            <Link to={`/product/${product._id}`} className="cart-product-title"><h4>{product.title}</h4></Link>
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
                    )
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

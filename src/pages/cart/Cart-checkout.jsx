import { useSelector } from "react-redux";
import { initiatePayment } from "../../services/post";
import "./cart.css";

const CartCheckout = (_props) => {
  const { cartProducts } = _props;
  const userData = useSelector((state) => state.user.value)

  // Funtion for calculating the total price of products in the cart.
  const calculateTotalPrice = () => {
    let total = 0;
    if (cartProducts.length) {
      cartProducts.forEach((item) => {
        total += item.price * item.quantity;
      });
    }
    return total.toFixed(2);
  };

  const checkoutButtonClick = () => {
    const items = cartProducts.map((product) => {
      const checkoutObjs = {productId: product._id, quantity: product.quantity}
      return checkoutObjs
    })
    initiatePayment(userData.data._id, items).then((paymentUrl) => {
      if(paymentUrl.url){
        window.location.href = paymentUrl.url;
      }else{
        console.log("Some error occured during checkout")
      }
    })
  }

  return (
    <div className="shadow p-3 mb-3 bg-body-tertiary rounded">
      <small>
        Part of your order qualifies for FREE Shipping. Choose this option at
        checkout. See details
      </small>
      <p className="fs-5">
        Subtotal {cartProducts.length} item's :{" "}
        <span className="fw-bold">${calculateTotalPrice()}</span>
      </p>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          This order contains a gift
        </label>
      </div>
      <button className="w-100 btn btn-warning rounded mb-3 mt-2" onClick={checkoutButtonClick}>
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartCheckout;

import { useNavigate } from "react-router-dom";
import "./product-card.css";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store";

const ProductCard = (_props) => {
  const { product } = _props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // This function is called when learn more button is clicked.
  // It will navigate to product description page using product Id as params
  const navigateToProductDetails = () => {
    navigate(`/product/${product.id}`);
  };

  // This function is called when add to cart button is clicked.
  // First we are adding quantity key to product object.
  // It will dispatch the addProductToCart resolver in store to add the product to cart store.
  const addToCartButtonClick = () => {
    const actionPayload = {
      ...product,
      quantity: 1,
    };
    dispatch(addProductToCart(actionPayload));
  };

  return (
    <div className="card shadow-sm bg-body-tertiary rounded">
      <div className="card__img">
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid product-card-image"
        />
      </div>
      <div className="card__descr-wrapper">
        <p className="card__title">{product.title}</p>
        <p className="card__descr">${product.price}</p>
        <div className="card__links">
          <button
            className="btn btn-outline-primary"
            onClick={navigateToProductDetails}
          >
            Learn More
          </button>
          <button className="btn btn-success" onClick={addToCartButtonClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

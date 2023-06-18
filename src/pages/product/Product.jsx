import "./product.css";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../../services/get";
import { addProductToCart } from "../../store";

import Loading from "../../components/loading/Loading";
import { useDispatch } from "react-redux";

const Product = () => {

  // For getting the id (product ID) from the url param
  const { id } = useParams();

  const dispatch = useDispatch();

  //queryKey is the name of the query
  //queryFn is the callback function in which we called a fucntion from services folder
  const { data, isLoading } = useQuery({
    queryKey: ["getSingleProduct"],
    queryFn: () => getSingleProduct(id).then((res) => res),
  });

  // This function is called when add to cart button is clicked.
  // It will add quantity key to data object which contains product information.
  // Then it will dispatch the data object to store for adding product to cart.
  const addToCartButtonClick = () => {
    data['quantity'] = 1;
    console.log(data);
    dispatch(addProductToCart(data));
  }

  // If loading is true it will display Loading component else the below code.
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="row mx-3">
          <div className="col-12 col-md-10 offset-md-1">
            <div className="product-container mt-5">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                  <img src={data.image} alt={"product"} className="img-fluid" />
                </div>
                <div className="col-12 col-lg-6">
                  <div className="product-details">
                    <h3 className="product-title">{data.title}</h3>
                    <p className="product-description">{data.description}</p>
                    <p className="product-price">${data.price}</p>
                    <p className="product-category">{data.category}</p>
                    <button className="product-button btn btn-outline-secondary" onClick={addToCartButtonClick}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;

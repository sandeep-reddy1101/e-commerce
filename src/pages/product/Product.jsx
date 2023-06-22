import "./product.css";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../../services/get";
import { addProductToCart } from "../../store";

import Loading from "../../components/loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../services/post";
import { openSnackBar } from "../../services/service";
import AddToCartButton from "../../components/add-to-cart-button/AddToCartButton";

const Product = () => {
  // For getting the id (product ID) from the url param
  const { id } = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.value)

  //queryKey is the name of the query
  //queryFn is the callback function in which we called a fucntion from services folder
  const { data, isLoading } = useQuery({
    queryKey: ["getSingleProduct"],
    queryFn: () => getSingleProduct(id).then((res) => res.data[0]),
  });

  // This function is called when add to cart button is clicked.
  // It will add quantity key to data object which contains product information.
  // If the user is logged in then it will update the cart in the backend and store
  const addToCartButtonClick = () => {
    if(userData.login){
      const actionPayload = {...data, quantity: 1}
      updateBackendCartAndCartStore(actionPayload)
    }else{
      openSnackBar("info", "User login required", dispatch)
    }
  };

  // It will call updateCart function in service to update the cart in the backend
  // If cart is updated successfully in the backend then it will update the store using dispatch
  // Else it will throw error
  const updateBackendCartAndCartStore = (actionPayload) => {
    try {
      updateCart(userData.data._id, actionPayload._id, actionPayload.quantity).then((response) => {
        if(response.cartUpdated){
          dispatch(addProductToCart(actionPayload));
        }else {
          throw Error("Some error occured in the backend API")
        }
      }).catch(err=>{
        console.log(err.message)
      })
    }catch (err) {
      console.log(err.message)
    }
  }

  // If loading is true it will display Loading component else the product details.
  // If there is product details in data vairable then it will display product details
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data ? (
            <>
              <div className="row mx-3">
                <div className="col-12 col-md-10 offset-md-1">
                  <div className="product-container mt-5">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-6">
                        <img
                          src={data.image}
                          alt={"product"}
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="product-details">
                          <h3 className="product-title">{data.title}</h3>
                          <p className="product-description">
                            {data.description}
                          </p>
                          <p className="product-price">${data.price}</p>
                          <p className="product-category">{data.category}</p>
                          {/* <button
                            className="product-button btn btn-outline-secondary"
                            onClick={addToCartButtonClick}
                          >
                            Add to Cart
                          </button> */}
                          <div><AddToCartButton addToCartButton={addToCartButtonClick} /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="row mt-5 mx-5 empty-cart">
                <div className="col-12">
                  <div className="p-5 ">
                    <h3 className="text-center">
                      Sorry!!! Product does not exist
                    </h3>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Product;

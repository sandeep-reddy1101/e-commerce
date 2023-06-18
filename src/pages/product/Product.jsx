import "./product.css";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../../services/get";

import Loading from "../../components/loading/Loading";

const Product = () => {
  const { id } = useParams();

  //queryKey is the name of the query
  //queryFn is the callback function in which we called a fucntion from services folder
  const { data, isLoading } = useQuery({
    queryKey: ["getSingleProduct"],
    queryFn: () => getSingleProduct(id).then((res) => res),
  });

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
                    <button className="product-button btn btn-outline-secondary">
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

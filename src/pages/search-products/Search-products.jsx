import { useParams } from "react-router-dom";
import "./search-products.css";

const SearchProducts = () => {
  // For getting the productName form url params
  const { productName } = useParams();

  return (
    <div className="row mt-5 mx-5 empty-cart">
      <div className="col-12">
        <div className="p-5 ">
          <h3 className="text-center">Searched product name : {productName}</h3>
        </div>
      </div>
    </div>
  );
};

export default SearchProducts;

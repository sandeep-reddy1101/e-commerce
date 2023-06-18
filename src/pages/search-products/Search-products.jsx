import { useParams } from "react-router-dom";
import "./search-products.css";

const SearchProducts = () => {

    // For getting the productName form url params
    const { productName } = useParams();

    return (
        <div>
            Searched Product : {productName}
        </div>
    )
}

export default SearchProducts;
import { useParams } from "react-router-dom";
import "./search-products.css";

const SearchProducts = () => {

    const { productName } = useParams();

    return (
        <div>
            Searched Product : {productName}
        </div>
    )
}

export default SearchProducts;
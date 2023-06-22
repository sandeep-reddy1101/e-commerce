import { useParams } from "react-router-dom";
import "./search-products.css";
import { useQuery } from "@tanstack/react-query";
import { searchProductWithProductName } from "../../services/get";
import Loading from "../../components/loading/Loading";
import ProductCard from "../../components/product-card/Product-card";
import { useEffect } from "react";

const SearchProducts = () => {
  // For getting the productName form url params
  const { productName } = useParams();
  // using useQuery to fetch the products with the productName
  const { data, isLoading, refetch } = useQuery(["searchProduct"], () => {
    return searchProductWithProductName(productName).then((res) => res.data);
  });

  useEffect(() => {
    refetch()
  }, [refetch, productName])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data.length > 0 ? (
            <>
              <div className="row mt-4 mx-3">
                {data?.map((product, key) => {
                  return (
                    <div
                      className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3"
                      key={key}
                    >
                      <ProductCard product={product} />
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div className="row mt-5 mx-5 empty-cart">
                <div className="col-12">
                  <div className="p-5 ">
                    <h3 className="text-center">
                      Sorry!!! No products found
                    </h3>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default SearchProducts;

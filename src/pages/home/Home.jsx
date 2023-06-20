import "./home.css";

import Loading from "../../components/loading/Loading";
import ProductCard from "../../components/product-card/Product-card";
import { getAllProducts } from "../../services/get";

import { useQuery } from "@tanstack/react-query";
// import { useSelector } from "react-redux";

const Home = () => {
  // const userData = useSelector((state) => state.user.value);

  // using useQuery to fetch the function from services folder which fetches the products from backend API
  // and stores the data in data variable
  //queryKey is the name of the query
  //queryFn is the callback function in which we called a fucntion from services folder
  const { data, isLoading } = useQuery({
    queryKey: ["getAllProducts"],
    queryFn: () => getAllProducts().then((res) => res),
  });

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
};

export default Home;

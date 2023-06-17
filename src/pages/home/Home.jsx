// import HomeCarousel from "./Home-carousel";
import "./home.css";
import { getAllProducts } from "../../services/get";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  // using useQuery to fetch the function from services folder which fetches the products from backend API
  // and stores the data in data variable
  const { data, isLoading } = useQuery({
    //queryKey is the name of the query
    queryKey: ["getAllProducts"],
    //queryFn is the callback function in which we called a fucntion from services folder
    queryFn: () => getAllProducts().then((res) => res),
  });

  //If the data is loading is finished then we have console logged the data.
  if (!isLoading) {
    console.log(data);
  }

  return (
    <div className="body-conatiner">
      {/* <div className="mt-2">
        <HomeCarousel />
      </div> */}
    </div>
  );
};

export default Home;

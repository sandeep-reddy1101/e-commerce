// import HomeCarousel from "./Home-carousel";
import "./home.css";
// import { getAllProducts } from "../../services/get";
// import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const Home = () => {

  const userData = useSelector((state) => state.user.value);

  // using useQuery to fetch the function from services folder which fetches the products from backend API
  // and stores the data in data variable
  //queryKey is the name of the query
  //queryFn is the callback function in which we called a fucntion from services folder
  // const { data, isLoading } = useQuery({
  //   queryKey: ["getAllProducts"],
  //   queryFn: () => getAllProducts().then((res) => res),
  // });
 
  return (
    <div className="body-conatiner">
      {userData.login && userData.data.firstName}
    </div>
  );
};

export default Home;

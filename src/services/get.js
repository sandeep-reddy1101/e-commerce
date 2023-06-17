import axios from "axios";

//function for fetching the data from the fake store api to get allproducts.
export const getAllProducts = () => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

export const getSingleProduct = (id) => {
  return axios
    .get("https://fakestoreapi.com/products/" + id)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

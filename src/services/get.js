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

// Function to fetch a single product from API based on productID.
export const getSingleProduct = (productId) => {
  return axios
    .get("https://fakestoreapi.com/products/" + productId)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

// Function for fetching the user cart details from API based on userID.
export const getUserCart = (userId) => {
  return axios
    .get("https://fakestoreapi.com/carts/user/" + userId)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

// Function for fetching user data after verifying it.
export const verifyUser = (emailId, password) => {
  return axios
    .get("http://localhost:4200/get/verifyUser/" + emailId + "/" + password)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

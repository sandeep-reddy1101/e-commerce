import axios from "axios";

const backendAPI = process.env.REACT_APP_USER_API_URL;

//function for fetching the data from the fake store api to get allproducts.
export const getAllProducts = () => {
  return axios
    .get(`${backendAPI}/products/get-all`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

// Function to fetch a single product from API based on productID.
export const getSingleProduct = (productId) => {
  return axios
    .get(`${backendAPI}/products/product/` + productId)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

// Function for fetching the user cart details from API based on userID.
export const getUserCart = (userId) => {
  return axios
    .get(`${backendAPI}/carts/user/` + userId)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

// Function for fetching user data after verifying it.
export const verifyUser = (emailId, password) => {
  return axios
    .get(`${backendAPI}/users/verify-user/` + emailId + "/" + password)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

import axios from "axios";

const backendAPI = process.env.REACT_APP_USER_API_URL || process.env.REACT_APP_LOCAL_API_URL;
const websiteURL = process.env.REACT_APP_WEBSITE_URL || process.env.REACT_APP_WEBSITE_LOCAL_URL;

// Funtion to insert the user into the data base.
export const insertUser = (userObj) => {
  const body = {
    firstName: userObj.firstName,
    lastName: userObj.lastName,
    email: userObj.email,
    password: userObj.password,
  };
  return axios
    .post(`${backendAPI}/users/insert-user`, body)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

// Function to initiate the payment when checkout button is clicked
export const initiatePayment = (userId, itemsArr) => {
  const body = {
    userId: userId,
    items: JSON.stringify(itemsArr),
    successUrl: `${websiteURL}/payment-success`,
    errorUrl: `${websiteURL}/payment-error`,
  };
  console.log(body);
  return axios
    .post(`${backendAPI}/create-checkout-session/`, body)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

export const updateCart = (userId, productId, quantity) => {
  const body = {
    userId: userId,
    productId: productId,
    quantity: quantity,
  };
  return axios
    .post(`${backendAPI}/carts`, body)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err.message);
    });
};

export const changeQuantityofProductInCart = (userId, productId, quantity) => {
  const body = {
    userId: userId,
    productId: productId,
    quantity: quantity,
  };
  return axios
    .post(`${backendAPI}/carts/change-quantity`, body)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err.message);
    });
};

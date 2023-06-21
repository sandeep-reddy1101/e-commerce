import axios from "axios";

const backendAPI = process.env.REACT_APP_USER_API_URL;
const websiteURL = process.env.REACT_APP_WEBSITE_URL;

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
export const initiatePayment = (itemsArr) => {
  const body = {
    items: JSON.stringify(itemsArr),
    successUrl: `${websiteURL}/payment-success`,
    errorUrl: `${websiteURL}/payment-error`
  };
  console.log(body)
  return axios
    .post(`${backendAPI}/create-checkout-session/`, body)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

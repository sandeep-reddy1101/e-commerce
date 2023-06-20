import axios from "axios";

// Funtion to insert the user into the data base.
export const insertUser = (userObj) => {
  const body = {
    firstName: userObj.firstName,
    lastName: userObj.lastName,
    email: userObj.email,
    password: userObj.password,
  };
  return axios
    .post("http://localhost:4200/post/insertUser", body)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

export const initiatePayment = (itemsArr) => {
  const body = {
    items: JSON.stringify(itemsArr),
    successUrl: "http://localhost:3000/payment-success",
    errorUrl: "http://localhost:3000/payment-error"
  };
  console.log(body)
  return axios
    .post("http://localhost:4200/create-checkout-session/", body)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

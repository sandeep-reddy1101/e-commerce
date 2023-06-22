import axios from "axios";

const backendAPI = process.env.REACT_APP_USER_API_URL || process.env.REACT_APP_LOCAL_API_URL;

export const deleteProductFromUserCart = (userId, productId) => {
  const body = {
    userId: userId,
    productId: productId,
  };
  console.log("body >>> ", body)
  return axios
    .post(`${backendAPI}/carts/remove-product-from-cart`, body)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err.message);
    });
};

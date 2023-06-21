import { initializeCart, open } from "../store";
import { getSingleProduct, getUserCart } from "./get";

export const fetchUserCartAndDispatchItToStore = (userId, dispatch) => {
  // Fetches cart of the user from API which is an array
  getUserCart(userId)
    .then((res) => {
      // Here res object has data key which contain user cart data in array
      // EX: { data : [{userId:'',cart:[{productId:'',quantity:''}]}]}
      if (res.data.length > 0) {
        const cartArr = res.data[0].cart;
        // Iterating through the response array to fetch the product details based on productID
        // Here in the variable Promises will be stored
        const cartProductDetailsPromise = cartArr.map((item) => {
          return getSingleProduct(item.productId).then((res) => {
            const newObj = { ...res.data[0], quantity: item.quantity };
            return newObj;
          });
        });
        // Here we are resolving all the promises to get the data and dispatching the data to initialize the cart store.
        Promise.all(cartProductDetailsPromise).then((cartProductDetails) => {
          dispatch(initializeCart(cartProductDetails));
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// This function is called when user form is submitted and user is verified in the backend.
export const openSnackBar = (type, message, dispatch) => {
  const actionPayload = {
    open: true,
    message: message,
    type: type,
  };
  dispatch(open(actionPayload));
};

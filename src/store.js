import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getUserLoginInfoFromSession } from "./services/sessions";

// It will call a function to check whether the user login information is present in session storage.
// If present it will get the information and store it.
const getUserFromSession = getUserLoginInfoFromSession();

const initialUserCartValue = { value: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialUserCartValue,
  reducers: {
    // resolver to add the product object to the state which is an array.
    // action payload will take the product object to update the state.
    addProductToCart: (state, action) => {
      const isProductExistInCart = state.value.find(item => item.id === action.payload.id);
      let newState;
      if(isProductExistInCart) {
        newState = state.value.map((product) => {
          if(product.id === action.payload.id){
            product.quantity += 1;
          }
          return product;
        });
      }else{
        newState = [...state.value, action.payload];
      }
      state.value = newState;
    },

    // resolver to remove the product object from the state which is an array.
    // action payload will take the product object to remove the product from the state.
    removeProductFromCart: (state, action) => {
      const newState = state.value.filter((product) =>
        product.id === action.payload.productId ? false : true
      );
      state.value = newState;
    },

    // resolver to update the quantity of product based on product Id.
    // action will take productId and quantity in the form of object.
    updateQuantityOfProductInCart: (state, action) => {
      const newState = state.value.map((product) => {
        if (product.id === action.payload.productId) {
          product.quantity = action.payload.quantity;
        }
        return product;
      });
      state.value = newState;
    },

    // resolver to Initialize the state with array of products.
    // action payload will take array of products.
    initializeCart: (state, action) => {
      const newState = action.payload;
      state.value = newState;
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  initializeCart,
  updateQuantityOfProductInCart,
} = cartSlice.actions;

// Initial state of the user store
// Here if the getUserFromSession has user login information then it will set user login info to initial state
// else it will store {value : {login : false}}
const initialUserState = getUserFromSession
  ? { value: JSON.parse(getUserFromSession) }
  : { value: { login: false } };

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    // login resolver to set the user login information into state
    login: (state, action) => {
      state.value = action.payload;
    },
    // logout resolver to remove the user login information form the state
    // i.e., it will set the state with {value : {login : false}}
    logout: (state) => {
      state.value = { value: { login: false } };
    },
  },
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
  },
});

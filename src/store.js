import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getUserLoginInfoFromSession } from "./services/sessions";

const getUserFromSession = getUserLoginInfoFromSession();

const initialUserCartValue = {value : []};
const cartSlice = createSlice({
    name : "cart",
    initialState : initialUserCartValue,
    reducers : {
        // resolver to add the product object to the state which is an array.
        // action payload will take the product object to update the state.
        addProductToCart : (state, action) => {
            const newState = [...state, action.payload];
            state.value = newState;
        },

        // resolver to remove the product object from the state which is an array.
        // action payload will take the product object to remove the product from the state.
        removeProductFromCart : (state, action) => {
            const newState = state.filter((product)=> product.productId === action.payload.productId ? false : true);
            state.value = newState
        },

        // resolver to Initialize the state with array of products.
        // action payload will take array of products.
        initializeCart : (state, action) => {
            const newState = action.payload;
            state.value = newState;
        }
    }
})

export const { addProductToCart, removeProductFromCart, initializeCart } = cartSlice.actions;


const initialUserState = getUserFromSession ? { value : JSON.parse(getUserFromSession)} : {value : {login : false}};
console.log("Initial user state in store >>> ", initialUserState)
const userSlice = createSlice({
    name : "user",
    initialState : initialUserState,
    reducers : {
        login : (state, action) => {
            state.value = action.payload;
        },
        logout : (state) => {
            state.value = {value : {login : false}};        }
    }
})

export const { login, logout} = userSlice.actions;

export const store = configureStore({
    reducer : {
        cart : cartSlice.reducer,
        user : userSlice.reducer,
    }
});
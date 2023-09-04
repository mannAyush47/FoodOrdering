import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import cartTotal from "./TotalPriceSlice"

// Creation of store

const appStore = configureStore({
    reducer:{
         cart : cartReducer,
         totalPrice : cartTotal

    }
}) 

export default appStore;
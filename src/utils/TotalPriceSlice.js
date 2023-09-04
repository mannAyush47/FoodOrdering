import { createSlice } from "@reduxjs/toolkit";

const TotalPriceSlice = createSlice({
  name: "totalPrice",
  initialState: {
    price : 0
  },
  reducers: {
    addPrice: (state, action) => {
        state.price = state.price + action.payload; // Corrected this line
    }},
});

export const {addPrice} = TotalPriceSlice.actions;

export default TotalPriceSlice.reducer;

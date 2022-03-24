import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = [];

const slice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    productAdded: (products, action) => {
      products.push({
        id: ++lastId,
        name: action.payload.name,
        price: action.payload.price,
        hasDiscount: false,
      })
    },
    productRemoved: (products, action) => {
      return products.filter(product => product.id !== action.payload.id)
    },
    productMarkAsDiscount: (products, action) => {
      products.find(product => product.id == action.payload.id).hasDiscount = action.payload.hasDiscount;
    },
  }
})

export const { productAdded, productRemoved, productMarkAsDiscount } = slice.actions;
export default slice.reducer;
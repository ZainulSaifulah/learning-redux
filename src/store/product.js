import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = {
  lists: []
};

const slice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    apiProductsRequestSucceeded: (products, action) => {
      products.lists = action.payload
    },
    productAdded: (products, action) => {
      products.lists.push({
        id: ++lastId,
        name: action.payload.name,
        price: action.payload.price,
        hasDiscount: false,
      })
    },
    productRemoved: (products, action) => {
      return products.lists.filter(product => product.id !== action.payload.id)
    },
    productMarkAsDiscount: (products, action) => {
      products.lists.find(product => product.id == action.payload.id).hasDiscount = action.payload.hasDiscount;
    },
  }
})

export const { productAdded, productRemoved, productMarkAsDiscount, apiProductsRequestSucceeded } = slice.actions;
export default slice.reducer;
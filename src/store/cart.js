import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = [];

const slice = createSlice({
  name: "carts",
  initialState: initialState,
  reducers: {
    productAddedToCart: (carts, action) => {
      const cartIndex = carts.findIndex(cart => cart.productId == action.payload.productId);
      if (cartIndex == -1) {
        carts.push({
          id: ++lastId,
          productId: action.payload.productId,
          quantity: action.payload.quantity
        });
      } else {
        carts[cartIndex].quantity += action.payload.quantity;
      }
    },
    productRemovedFromCart: (carts, action) => {
      const cartIndex = carts.findIndex(cart => cart.productId == action.payload.productId);
      if (cartIndex != -1) {
        carts[cartIndex].quantity--;
      }
    }
  }
})


export const { productAddedToCart, productRemovedFromCart } = slice.actions;
export default slice.reducer;
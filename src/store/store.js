import { configureStore } from "@reduxjs/toolkit"; 
import reducer from "./product"

const store = configureStore({
  reducer
})

export default store;


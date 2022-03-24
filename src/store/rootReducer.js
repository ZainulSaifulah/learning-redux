import { combineReducers } from "redux";
import productReducer from './product';
import cartReducer from './cart';

export default combineReducers({
  products: productReducer,
  carts: cartReducer
})
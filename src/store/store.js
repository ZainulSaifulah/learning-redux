import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from './rootReducer';
import logger from './middleware/logger'
import api from "./middleware/api";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, api)
})

export default store;


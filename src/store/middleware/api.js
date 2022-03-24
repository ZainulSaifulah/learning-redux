import axios from "axios";
import { apiProductsRequestSucceeded } from '../product';

const api = store => next => async action => {

  if (action.type !== "apiRequest") return next(action);

  next(action);

  const { url, method, data, onSuccess, onError } = action.payload;
  const response = await axios.request({
    baseURL: 'https://fakestoreapi.com',
    url,
    method,
    data
  });

  store.dispatch(apiProductsRequestSucceeded(response.data));

}

export default api;

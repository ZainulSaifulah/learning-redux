import store from "./store/store"
import { productAdded, productRemoved, productMarkAsDiscount } from "./store/product";
import { productAddedToCart, productRemovedFromCart} from './store/cart';

store.dispatch({
  type: 'apiRequest', 
  payload: {
      url: '/products',
      method: 'get'
  }
});



console.log(store.getState());
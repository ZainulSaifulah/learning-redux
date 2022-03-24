import store from "./store/store"
import { productAdded, productRemoved, productMarkAsDiscount } from "./store/product";
import { productAddedToCart, productRemovedFromCart} from './store/cart';

store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

store.dispatch(productAdded({
  name: "Product 1",
  price: 500
}))

store.dispatch(productRemoved({
  id: 1
}))

store.dispatch(productAdded({
  name: "Product 2",
  price: 500
}))

store.dispatch(productAdded({
  name: "Product 3",
  price: 500
}))

store.dispatch(productMarkAsDiscount({
  id: 2,
  hasDiscount: true
}))

store.dispatch(productAddedToCart({
  productId: 2,
  quantity: 4
}))

store.dispatch(productAddedToCart({
  productId: 2,
  quantity: 4
}))

store.dispatch(productRemovedFromCart({
  productId: 2
}))


console.log(store.getState());
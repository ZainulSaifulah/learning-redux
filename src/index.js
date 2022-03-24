import { productAdded, productRemoved, productMarkAsDiscount } from "./store/product";
import store from "./store/store"


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


console.log(store.getState());
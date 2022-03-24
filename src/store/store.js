import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";
import reducer from "./product/reducer"

const store = createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  devToolsEnhancer({ trace: true })
);

export default store;


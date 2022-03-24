import * as actions from "./actionTypes"

let lastId = 0;
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.PRODUCT_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          name: action.payload.name,
          price: action.payload.price,
          hasDiscount: false,
        }
      ];
    case actions.PRODUCT_REMOVED:
      return state.filter(product => product.id !== action.payload.id);
    case actions.PRODUCT_MARK_AS_DISCOUNT:
      state.find(product => product.id == action.payload.id).hasDiscount = action.payload.hasDiscount;

      return [
        ...state
      ];

    default:
      return state;
  }
}

export const PRODUCT_ADDED = "productAdded";
export const PRODUCT_REMOVED = "productRemoved";
export const PRODUCT_MARK_AS_DISCOUNT = "markProductAsDiscount";

/**
 * 
 * @param {name, price, hasDiscount} product 
 * @returns 
 */
 export function productAdded(product = {}){
  return {
      type: PRODUCT_ADDED,
      payload: {
          name: product.name ? product.name : null,
          price: product.price ? product.price : null,
          hasDiscount: product.hasDiscount ? true : false
      }
  }
}

/**
* @param { id } params
* @returns
*/
export const productRemoved = params => ({
  type: PRODUCT_REMOVED,
  payload: {
      id : params.id,
  }
  });


/**
* @param { id, hasDiscount } params
* @returns
*/
export const productMarkAsDiscount = params => ({
type: PRODUCT_MARK_AS_DISCOUNT,
payload: {
    id : params.id,
    hasDiscount: params.hasDiscount
}
});


let lastId = 0;
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          name: action.payload.name,
          price: action.payload.price,
          hasDiscount: false,
        }
      ];
    case PRODUCT_REMOVED:
      return state.filter(product => product.id !== action.payload.id);
    case PRODUCT_MARK_AS_DISCOUNT:
      state.find(product => product.id == action.payload.id).hasDiscount = action.payload.hasDiscount;

      return [
        ...state
      ];

    default:
      return state;
  }
}
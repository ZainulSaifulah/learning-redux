import * as actions from './actionTypes';

/**
 * 
 * @param {name, price, hasDiscount} product 
 * @returns 
 */
export function productAdded(product = {}){
    return {
        type: actions.PRODUCT_ADDED,
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
  type: actions.PRODUCT_REMOVED,
  payload: {
      id : params.id,
  }
  });


/**
 * @param { id, hasDiscount } params
 * @returns
 */
 export const productMarkAsDiscount = params => ({
  type: actions.PRODUCT_MARK_AS_DISCOUNT,
  payload: {
      id : params.id,
      hasDiscount: params.hasDiscount
  }
});

/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { createReducer } from "reduxsauce";
import { PurchaseTypes } from "./Actions";

const initialState = {
  products: [],
  error: null,
  isLoading: false
};

export const addProduct = state => ({
  ...state,
  isLoading: true
});

export const addProductSuccess = (state, { data }) => {
  const products = [...state.products];
  const addedProduct = products.concat(data);
  return {
    ...state,
    isLoading: false,
    products: addedProduct
  };
};

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(initialState, {
  [PurchaseTypes.ADD_PRODUCT]: addProduct,
  [PurchaseTypes.ADD_PRODUCT_SUCCESS]: addProductSuccess
});

import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // This action is triggered when the application starts
  addProduct: ['item'],
  addProductSuccess: ['data'],
});

export const PurchaseTypes = Types;
export default Creators;

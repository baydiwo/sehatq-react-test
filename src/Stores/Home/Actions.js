import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // This action is triggered when the application starts
  fetchHome: null,
  fetchHomeSuccess: ['data'],
  fetchHomeFailure: ['error'],
});

export const HomeTypes = Types;
export default Creators;

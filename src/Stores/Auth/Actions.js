import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // This action is triggered when the application starts
  signIn: ['form'],
  signInSuccess: ['auth'],
  signInFailure: ['error'],
});

export const AuthTypes = Types;
export default Creators;

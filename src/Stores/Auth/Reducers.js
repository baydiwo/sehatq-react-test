/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */


import { createReducer } from 'reduxsauce'
import { AuthTypes } from './Actions'

const initialState = {
  isLoading: false,
  error: null,
  auth: null,
}

export const signIn = (state) => ({
  ...state,
  isLoading: true,
});

export const signInSuccess = (state, { auth }) => ({
  ...state,
  isLoading: false,
  auth
});

export const signInFailure = (state, { error }) => ({
  ...state,
  isLoading: false,
  error
});


/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(initialState, {
  [AuthTypes.SIGN_IN]: signIn,
  [AuthTypes.SIGN_IN_SUCCESS]: signInSuccess,
  [AuthTypes.SIGN_IN_FAILURE]: signInFailure,
})

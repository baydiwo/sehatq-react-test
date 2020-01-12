/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */


import { createReducer } from 'reduxsauce'
import { HomeTypes } from './Actions'

const initialState = {
  isLoading: false,
  error: null,
  data: null,
}

export const fetchHome = (state) => ({
  ...state,
  isLoading: true,
});

export const fetchHomeSuccess = (state, { data }) => ({
  ...state,
  isLoading: false,
  data
});

export const fetchHomeFailure = (state, { error }) => ({
  ...state,
  isLoading: false,
  error
});


/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(initialState, {
  [HomeTypes.FETCH_HOME]: fetchHome,
  [HomeTypes.FETCH_HOME_SUCCESS]: fetchHomeSuccess,
  [HomeTypes.FETCH_HOME_FAILURE]: fetchHomeFailure,
})

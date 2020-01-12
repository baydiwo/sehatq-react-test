import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas';
import { reducer as AuthReducer } from './Auth/Reducers';
import { reducer as PurchaseReducer } from './Purchase/Reducers';
import { reducer as HomeReducer } from './Home/Reducers';

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    Auth: AuthReducer,
    Purchase: PurchaseReducer,
    Home: HomeReducer,
  });

  return configureStore(rootReducer, rootSaga);
}

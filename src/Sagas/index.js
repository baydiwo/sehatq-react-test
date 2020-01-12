import { takeLatest, all } from 'redux-saga/effects'
import { StartupTypes } from '../Stores/Startup/Actions';
import { PurchaseTypes } from '../Stores/Purchase/Actions';
import { HomeTypes } from '../Stores/Home/Actions';
import { startup } from './StartupSaga';
import { addProduct } from './PurchaseSaga';
import { fetchHome } from './HomeSaga';

export default function* root() {

  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(PurchaseTypes.ADD_PRODUCT, addProduct),
    takeLatest(HomeTypes.FETCH_HOME, fetchHome),
  ]);
}

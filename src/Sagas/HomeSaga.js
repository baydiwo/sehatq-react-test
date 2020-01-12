import { put, call } from "redux-saga/effects";
import { fetchHomeApi } from "../Services/API";
import HomeActions from "../Stores/Home/Actions";

export function* fetchHome() {
  try {
    const response = yield call(fetchHomeApi);
    if (!response) return "Something wrong, please try again later.";

    const { data } = response;
    yield put(HomeActions.fetchHomeSuccess(data[0].data));
  } catch (error) {
    console.log(`Error : ${JSON.stringify(error)}`);
  }
}

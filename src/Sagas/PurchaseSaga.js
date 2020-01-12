import { put } from "redux-saga/effects";
import PurchaseActions from "../Stores/Purchase/Actions";

export function* addProduct({ item }) {
  yield put(PurchaseActions.addProductSuccess(item));
  alert(`Produk ${item.title} berhasil dimasukkan ke keranjang belanja anda`);
}

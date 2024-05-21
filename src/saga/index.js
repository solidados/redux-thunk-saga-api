/** Здесь будет проинициализирована Saga */
import { all } from "redux-saga/effects";
import { countWatcher } from "./countSaga.js";
import { userWatcher } from "./userSaga.js";

export function* rootWatcher() {
  yield all([countWatcher(), userWatcher()]);
}

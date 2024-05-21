/** Здесь находятся асинхронные `actions` для работы с `counter`
 * 1. Для всех `action`, которые связаны со счётчиком создаются `Watchers`, которые будут следить за ними
 *
 * 2. Создаю функцию, которая будет делать задержку (обычный timeOut)
 * 3. Импортирую `put` – это своего рода `dispatch` предназначенный для синхронных `actions`
 * 4. Далее, в функциях, перед каким-то **асинхронным** действием вызываю `yield` (выглядит примерно так же, как
 * `async..await`, то есть следующий код не выполнится, пока не выполнится это асинхронное действие
 * 5. В `put` передаю нужный `action`, для этого я использовал ранее созданные `Action Creator Function` – функция,
 * которая возвращает объект `action` (на этом этапе `put()` не отработает, пока не отработает `delay`)
 * 6. `Worker` готов, но как заставить его работать? – для этого необходимо реализовать `Watcher`.
 * Он будет следить за тем, чтобы асинхронный `action` был выполнен.
 * Импортирую эффект `takeEvery`, который:
 * - первым параметром принимает какой-то `action` за которым нужно следить
 * - вторым параметром сам `Worker`
 * 7. Далее вернусь в index `Store` и импортирую функцию, которая будет создавать `SagaMiddleware`
 * */

import { put, takeEvery } from "redux-saga/effects";
import {
  ASYNC_DECREMENT,
  ASYNC_INCREMENT,
  decrementCreator,
  incrementCreator,
} from "../store/countReducer.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementCreator());
}

function* decrementWorker() {
  yield delay(1000);
  yield put(decrementCreator());
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker);
  yield takeEvery(ASYNC_DECREMENT, decrementWorker);
}

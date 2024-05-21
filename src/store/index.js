import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { countWatcher } from "../saga/countSaga.js";
import { cashReducer } from "./cashReducer";
import countReducer from "./countReducer.js";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import createMiddlewareSaga from "redux-saga";

const sagaMiddleware = createMiddlewareSaga();

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
  counter: countReducer,
});

/**
 * Store – это объект, который содержит несколько методов:
 * - `getState()` получить состояние
 * - `dispatch` изменить состояние
 * - подписаться на изменение состояний
 * Создаётся при помощи `createStore()` и принимает два параметра:
 * - `reducer`
 * - `PreloadedState`
 * */

export const index = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)),
);

sagaMiddleware.run(countWatcher);

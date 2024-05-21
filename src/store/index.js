import { createStore, combineReducers, applyMiddleware } from "redux";
import { rootWatcher } from "../saga/index.js";
import { cashReducer } from "./cashReducer";
import countReducer from "./countReducer.js";
import userReducer from "./userReducer.js";
import { customerReducer } from "./customerReducer";
import createMiddlewareSaga from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const sagaMiddleware = createMiddlewareSaga();

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
  counter: countReducer,
  users: userReducer,
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

sagaMiddleware.run(rootWatcher);

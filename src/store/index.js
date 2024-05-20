import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
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
  composeWithDevTools(applyMiddleware(thunk)),
);

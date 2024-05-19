import { createStore } from "redux";

const defaultState = {
  cash: 0,
};
/**
 * `reducer` - это функция, которая принимает два параметра:
 * - `state`
 * - `action` – это объект, у которого есть обязательное поле `type`, по которому определяется, как состояние будет
 * изменяться. В `action` можно так же передать любое количество данных `payload`
 *
 * ```action = {type: "", payload?: ""}```
 * */

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

/**
 * Store – это объект, который содержит несколько методов:
 * - `getState()` получить состояние
 * - `dispatch` изменить состояние
 * - подписаться на изменение состояний
 * Создаётся при помощи `createStore()` и принимает два параметра:
 * - `reducer`
 * - `PreloadedState`
 * */
export const store = createStore(reducer);

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
const ADD_CASH = "ADD_CASH";
const GET_CASH = "GET_CASH";

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload };
    case GET_CASH:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

/** Action Creator Function
 * Это простейшая функция, которая будет возвращать объект */

export const addCashAction = (payload) => ({
  type: ADD_CASH,
  payload,
});

export const getCashAction = (payload) => ({
  type: GET_CASH,
  payload,
});

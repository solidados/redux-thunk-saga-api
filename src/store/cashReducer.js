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
const CREDIT = "CREDIT";
const DEBIT = "DEBIT";

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREDIT:
      return { ...state, cash: state.cash + action.payload };
    case DEBIT:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

/** Action Creator Function
 * Это простейшая функция, которая будет возвращать объект */

export const creditCashAction = (payload) => ({
  type: CREDIT,
  payload,
});

export const debitCashAction = (payload) => ({
  type: DEBIT,
  payload,
});

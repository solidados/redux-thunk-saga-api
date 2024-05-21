const defaultState = {
  customers: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const GET_CUSTOMERS_LIST = "GET_CUSTOMERS_LIST";
const CLEAR_CUSTOMERS = "CLEAR_CUSTOMERS";
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS_LIST:
      return { ...state, customers: [...state.customers, ...action.payload] };

    case CLEAR_CUSTOMERS:
      return { ...state, customers: [] };

    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };

    case REMOVE_CUSTOMERS:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

/** Action Creator Function
 * Это простейшая функция, которая будет возвращать объект */

export const addCustomerAction = (payload) => ({
  type: ADD_CUSTOMER,
  payload,
});

export const addCustomersListAction = (payload) => ({
  type: GET_CUSTOMERS_LIST,
  payload,
});

export const clearCustomersAction = () => ({
  type: CLEAR_CUSTOMERS,
});

export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMERS,
  payload,
});

const defaultState = {
  customers: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const ADD_CUSTOMERS_LIST = "ADD_CUSTOMERS_LIST";
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMERS_LIST:
      return { ...state, customers: [...state.customers, ...state.payload] };

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
  type: ADD_CUSTOMERS_LIST,
  payload,
});

export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMERS,
  payload,
});

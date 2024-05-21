import { addCustomersListAction } from "../customerReducer";

export const fetchCustomers = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then((response) => response.json())
      .then((json) => dispatch(addCustomersListAction(json)));
  };
};

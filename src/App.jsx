import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Users from "./components/Users.jsx";
import { fetchCustomers } from "./store/asyncActions/customers";
import { creditCashAction, debitCashAction } from "./store/cashReducer";
import {
  asyncDecrementCreator,
  asyncIncrementCreator,
} from "./store/countReducer.js";
import {
  addCustomerAction,
  clearCustomersAction,
  removeCustomerAction,
} from "./store/customerReducer";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const counter = useSelector((state) => state.counter.counter);

  const debitCash = (cash) => {
    dispatch(debitCashAction(cash));
  };

  const creditCash = (cash) => {
    dispatch(creditCashAction(cash));
  };

  const formatter = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  });
  const money = formatter.format(cash);

  const increment = () => {
    dispatch(asyncIncrementCreator());
  };

  const decrement = () => {
    dispatch(asyncDecrementCreator());
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: uuidv4(),
    };
    dispatch(addCustomerAction(customer));
  };

  const clearCustomers = () => {
    dispatch(clearCustomersAction());
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className={"App"}>
      <div className={"bank-wrapper"}>
        <h1>
          <span>Best </span>
          <sup>Bank</sup>
        </h1>
        <h2>Balance: {money}</h2>
        <fieldset>
          <legend className={"btn-subtitle"}>Financial operations</legend>
          <div className={"btn-wrapper"}>
            <button onClick={() => debitCash(Number(prompt()))}>Debit</button>
            <button onClick={() => creditCash(Number(prompt()))}>Credit</button>
          </div>
        </fieldset>

        <fieldset>
          <legend className="btn-subtitle">Counter</legend>
          <h2>{counter}</h2>
          <div className={"btn-wrapper"}>
            <button onClick={() => decrement()}>-</button>
            <button onClick={() => increment()}>+</button>
          </div>
        </fieldset>

        <fieldset>
          <legend className={"btn-subtitle"}>Customer operations</legend>
          <div className={"btn-wrapper"}>
            <button onClick={() => addCustomer(prompt())}>Add new</button>
            <button
              onClick={() => {
                clearCustomers();
                dispatch(fetchCustomers());
              }}
            >
              Get all
            </button>
          </div>
          {customers.length > 0 ? (
            <div className={"customer"}>
              {customers.map((customer) => (
                <div key={customer.id} onClick={() => removeCustomer(customer)}>
                  {customer.name}
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p className={"notice"}>Customers not found</p>
            </div>
          )}
        </fieldset>
      </div>
      <Users />
    </div>
  );
}

export default App;

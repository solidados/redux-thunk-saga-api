import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { fetchCustomers } from "./store/asyncActions/customers";
import { creditCashAction, debitCashAction } from "./store/cashReducer";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const debitCash = (cash) => {
    dispatch(debitCashAction(cash));
  };

  const creditCash = (cash) => {
    dispatch(creditCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: uuidv4(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className={"App"}>
      <h1>
        <span>Best </span>
        <sup>Bank</sup>
      </h1>
      <h2>Balance: {cash}</h2>
      <fieldset>
        <legend className={"btn-subtitle"}>Financial operations</legend>
        <div className={"btn-wrapper"}>
          <button onClick={() => debitCash(Number(prompt()))}>Debit</button>
          <button onClick={() => creditCash(Number(prompt()))}>Credit</button>
        </div>
      </fieldset>

      <fieldset>
        <legend className={"btn-subtitle"}>Customer operations</legend>
        <div className={"btn-wrapper"}>
          <button onClick={() => addCustomer(prompt())}>Add new</button>
          <button onClick={() => dispatch(fetchCustomers())}>Get all</button>
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
  );
}

export default App;

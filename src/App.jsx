import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: uuidv4(),
    };
    dispatch({ type: "ADD_CUSTOMER", payload: customer });
  };

  const removeCustomer = (customer) => {
    dispatch({ type: "REMOVE_CUSTOMERS", payload: customer.id });
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
          <button onClick={() => getCash(Number(prompt()))}>Снять</button>
          <button onClick={() => addCash(Number(prompt()))}>Внести</button>
        </div>
      </fieldset>

      <fieldset>
        <legend className={"btn-subtitle"}>Customer operations</legend>
        <div className={"btn-wrapper"}>
          <button onClick={() => addCustomer(prompt())}>Добавить</button>
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
            <p className={"notice"}>Клиенты не найдены</p>
          </div>
        )}
      </fieldset>
    </div>
  );
}

export default App;

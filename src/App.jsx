import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  return (
    <div className={"App"}>
      <h1>Best Bank</h1>
      <h2>{cash}</h2>
      <div className={"btn-wrapper"}>
        <button onClick={() => getCash(Number(prompt()))}>Снять деньги</button>
        <button onClick={() => addCash(Number(prompt()))}>Внести деньги</button>
      </div>
    </div>
  );
}

export default App;

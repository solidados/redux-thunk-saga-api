import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { index } from "./store";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={index}>
    <App />
  </Provider>,
);

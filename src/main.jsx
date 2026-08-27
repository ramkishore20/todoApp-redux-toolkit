import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";

axios.defaults.baseURL = "https://6a5bc4cb64f700df5bd7827a.mockapi.io/api/";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>
);

import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import {Provider} from "react-redux"
import {store} from "../src/Redux/store"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  rootElement
);

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "./store/reducers";

import App from "./App";

const rootElement = document.getElementById("root");
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, rootElement);

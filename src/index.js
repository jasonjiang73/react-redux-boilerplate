import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter,HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);

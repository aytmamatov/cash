import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import createEventReducer from "./store/reducers/createEvent-reducer";
import { reducer as formReducer } from "redux-form";
import authReducer from "./store/reducers/auth-reducer";

const rootReducer = combineReducers({
  createEvent: createEventReducer,
  auth: authReducer,
  form: formReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

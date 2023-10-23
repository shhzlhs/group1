import { applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import { rootReducer } from "./Reducers/RootReducer";
const { createStore } = require("redux");
const middleware = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const reduxStore = createStore(rootReducer, middleware);

export { reduxStore };

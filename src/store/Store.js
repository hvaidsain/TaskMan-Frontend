import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import logger from "redux-logger";

const initialStore = {};

export default createStore(
  rootReducer,
  initialStore,
  compose(applyMiddleware(thunk, logger))
);

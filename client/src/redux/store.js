import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers/rootReducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(rootReducers, applyMiddleware(thunk, logger));

export default store;

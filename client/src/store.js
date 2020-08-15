import { createStore, applyMiddleware, compose } from "redux";
import catalogReducer from "./reducers/catalogReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(catalogReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
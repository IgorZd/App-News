import { createStore, applyMiddleware, compose } from "../../node_modules/redux";
import rootReducer from "./reducers/index";
import { rootMiddleware } from "./middleware";
import thunk from "../../node_modules/redux-thunk";
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(rootMiddleware, thunk))
);
export default store;
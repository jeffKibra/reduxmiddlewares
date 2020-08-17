import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "./reducers";
import loadingReducer from "./loadingReducer";
import logger from "./middlewares/logger";
import timer from "./middlewares/timer";
import increase from "./middlewares/increase";
import decrease from "./middlewares/decrease";

const rootReducer = combineReducers({
  value: reducers,
  loading: loadingReducer,
});
const initialState = { value: 0, loading: false };
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(logger, increase, decrease, timer)
);

export default store;

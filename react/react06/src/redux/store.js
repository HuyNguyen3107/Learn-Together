import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";

import { counterReducer } from "./reducers/counterReducer.js";
import { postReducer } from "./reducers/postReducer.js";

const rootReducer = combineReducers({
  counter: counterReducer,
  post: postReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

import { combineReducers } from "redux";
import authorization from "./authorization";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  authorization,
  loadingBar: loadingBarReducer
});

import { createStore } from "redux";
import rootReducer from "./reducers";

import { addAuthorization } from "./actions";
import { showLoading, hideLoading } from "react-redux-loading-bar";

//Map properties to be accessed in connected views
export const mapStateToProps = state => {
  return { authorization: state.authorization };
};

//Map actions to be accessed in connected views
export const mapDispatchToProps = dispatch => {
  return {
    addAuthorization: authorization =>
      dispatch(addAuthorization(authorization)),
    showLoadingBar: () => dispatch(showLoading()),
    hideLoadingBar: () => dispatch(hideLoading())
  };
};

export default createStore(
  rootReducer
  /*, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
); //Redux Chrome's extension

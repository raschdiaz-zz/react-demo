import { ADD_AUTHORIZATION, REMOVE_AUTHORIZATION } from "../actionTypes";

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_AUTHORIZATION: {
      const payload = action.payload;
      return {
        ...payload
      };
    }
    case REMOVE_AUTHORIZATION: {
      return null;
    }
    default:
      return state;
  }
}

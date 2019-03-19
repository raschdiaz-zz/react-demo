import { ADD_AUTHORIZATION, REMOVE_AUTHORIZATION } from "../actionTypes";

const initialState = {
    authentication: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_AUTHORIZATION: {
            const payload = action.payload;
            return {
                authentication: payload
            }
        }
        case REMOVE_AUTHORIZATION: {
            return {
                authentication: null
            }
        }
        default:
            return state;
    }
}
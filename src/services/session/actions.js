import { ADD_AUTHORIZATION, REMOVE_AUTHORIZATION } from './actionTypes';

export const addAuthorization = data => ({
    type: ADD_AUTHORIZATION,
    payload: data
});

export const removeAuhtorization = () => ({
    type: REMOVE_AUTHORIZATION
});
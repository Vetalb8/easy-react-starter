import { createReducer } from '../../utils/reducer';
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS
} from './actions';

const initialState = {
    isFetching: false,
    isAuthenticated: false
};

const actionHandlers = {
    [LOGIN_REQUEST]: () => ({
        isFetching: true,
        isAuthenticated: false
    }),
    [LOGIN_SUCCESS]: () => ({
        isFetching: false,
        isAuthenticated: true
    }),
    [LOGIN_FAILURE]: (_, action) => ({
        isFetching: true,
        isAuthenticated: false,
        error: action.payload
    }),
    [LOGOUT_REQUEST]: () => ({
        isFetching: true,
        isAuthenticated: false
    }),
    [LOGOUT_SUCCESS]: () => ({
        isFetching: false,
        isAuthenticated: false
    })
};

export default createReducer(initialState, actionHandlers);

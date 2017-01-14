import * as api from './api';

export const LOGIN_REQUEST = 'login/request';
export const LOGIN_SUCCESS = 'login/success';
export const LOGIN_FAILURE = 'login/failure';

export function requestLogin() {
    return {
        type: LOGIN_REQUEST
    };
}

export function successLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    };
}

export function errorLogin(error) {
    return {
        type: LOGIN_FAILURE,
        payload: error,
        error: true
    };
}

export const LOGOUT_REQUEST = 'logout/request';
export const LOGOUT_SUCCESS = 'logout/success';
export const LOGOUT_FAILURE = 'logout/failure';

export function requestLogout() {
    return {
        type: LOGOUT_REQUEST
    };
}

export function successLogout() {
    return {
        type: LOGOUT_SUCCESS
    };
}

export function errorLogout(error) {
    return {
        type: LOGOUT_FAILURE,
        payload: error,
        error: true
    };
}

export function loginUser(login, password) {
    return (dispatch) => {
        dispatch(requestLogin());

        return api.loginUser({ login, password })
            .then(res => {
                // localStorage.setItem('id_token', user.id_token);
                dispatch(successLogin(res.data.data));
            })
            .catch(error => dispatch(errorLogin(error)));
    };
}

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        return api.logoutUser()
            .then(() => {
                // localStorage.removeItem('id_token')
                dispatch(successLogout());
            })
            .catch(() => dispatch(errorLogout()));
    };
}

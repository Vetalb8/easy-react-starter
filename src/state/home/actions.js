import { getHomeData } from './api';

export const HOME_FETCHING = 'home/fetching';
export const HOME_SUCCESS = 'home/success';
export const HOME_ERROR = 'home/error';


export function fetchHome() {
    return {
        type: HOME_FETCHING
    };
}

export function successHome(data) {
    return {
        type: HOME_SUCCESS,
        data
    };
}

export function errorHome(error) {
    return {
        type: HOME_ERROR,
        error
    };
}

export function loadHome() {
    return (dispatch) => {
        dispatch(fetchHome());

        return getHomeData(
            res => dispatch(successHome(res.data.data)),
            error => dispatch(errorHome(error))
        );
    };
}

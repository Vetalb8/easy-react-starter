import axios from 'axios';

import apiRoutes from '../../constants/api-routes';

export const HOME_FETCHING = 'home/fetching';
export const HOME_SUCCESS = 'home/success';
export const HOME_ERROR = 'home/error';

const initialState = {
    data: {
        children: []
    }
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case HOME_FETCHING:
            return {
                ...state,
                isFetching: true
            };
        case HOME_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        case HOME_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        default:
            return state;
    }
}

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

        return axios.get(apiRoutes.loadHomeData)
            .then(res => {
                dispatch(successHome(res.data.data));
            })
            .catch(error => {
                dispatch(errorHome(error));
            });
    };
}

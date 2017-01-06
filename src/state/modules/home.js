import axios from 'axios';

import apiRoutes from '../../constants/api-routes';

export const HOME_FETCHING = 'home/fetching';
export const HOME_SUCCESS = 'home/success';
export const HOME_ERROR = 'home/error';

const initialState = {
    text: ''
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
                text: action.text
            };
        case HOME_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error,
                text: action.error.message
            };
        default:
            return state;
    }
}

export function loadHome() {
    return (dispatch) => {
        dispatch({
            type: HOME_FETCHING
        });

        return axios.get(apiRoutes.loadHomeData)
            .then(res => {
                dispatch({
                    type: HOME_SUCCESS,
                    text: res.data
                });
            })
            .catch(error => {
                dispatch({
                    type: HOME_ERROR,
                    error
                });
            });
    };
}

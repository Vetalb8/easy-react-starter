import { HOME_FETCHING, HOME_SUCCESS, HOME_ERROR } from '../actions/home';

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

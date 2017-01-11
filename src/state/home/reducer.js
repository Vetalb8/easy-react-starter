import { createReducer } from '../../utils/reducer';
import { HOME_FETCHING, HOME_SUCCESS, HOME_ERROR } from './actions';

const initialState = {
    data: {
        children: []
    }
};

const actionHandlers = {
    [HOME_FETCHING]: () => ({ isFetching: true }),
    [HOME_SUCCESS]: (_, action) => ({ isFetching: false, data: action.payload }),
    [HOME_ERROR]: (_, action) => ({ isFetching: false, error: action.payload })
};

export default createReducer(initialState, actionHandlers);

import { createReducer } from '../../utils/reducer';
import { USER_SWITCH_LOCALE } from './actions';

const initialState = {
    'locale': 'en'
};

const actionHandlers = {
    [USER_SWITCH_LOCALE]: (_, action) => ({ locale: action.payload })
};

export default createReducer(initialState, actionHandlers);

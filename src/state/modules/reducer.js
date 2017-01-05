import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import home from './home';

export default combineReducers({
    routing: routerReducer,
    form,
    home
});

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

export default function configureStore(history, initialState = {}) {
    const middleware = [routerMiddleware(history), thunk];
    const fnCreateStore = applyMiddleware(...middleware)(createStore);
    const reducers = require('./reducers');
    const reducer = combineReducers({
        ...reducers,
        form,
        routing: routerReducer
    });

    return fnCreateStore(reducer, initialState);
}

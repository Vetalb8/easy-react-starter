import { createStore as _createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

export default function createStore(history, initialState = {}) {
    const middleware = [routerMiddleware(history), thunk];
    const fnCreateStore = applyMiddleware(...middleware)(_createStore);

    return fnCreateStore(reducer, initialState);
}

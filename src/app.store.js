import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

export default function configureStore(history, initialState = {}) {
    const middleware = [routerMiddleware(history), thunk];
    let fnCreateStore;
    const reducers = require('./reducers');
    const reducer = combineReducers({
        ...reducers,
        form,
        routing: routerReducer
    });

    if (__DEVTOOLS__) {
        const { persistState } = require('redux-devtools');
        const DevTools = require('./components/DevTools/DevTools');

        fnCreateStore = compose(
            applyMiddleware(...middleware),
            window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
            persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
        )(createStore);
    } else {
        fnCreateStore = applyMiddleware(...middleware)(createStore);
    }

    return fnCreateStore(reducer, initialState);
}

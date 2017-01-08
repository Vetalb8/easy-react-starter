import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './app.store';
import { syncHistoryWithStore } from 'react-router-redux';
import getRoutes from './app.routes';

import './app.scss';

const store = configureStore(browserHistory, __INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);

const component = (
    <Router history={history}>
        { getRoutes() }
    </Router>
);

const container = document.getElementById('app');

if (__DEVTOOLS__ && !window.devToolsExtension) {
    const DevTools = require('./components/DevTools/DevTools');

    ReactDOM.render(
        <Provider store={store}>
            <div>
                {component}
                <DevTools />
            </div>
        </Provider>,
        container
    );
} else {
    ReactDOM.render(
        <Provider store={store}>
            {component}
        </Provider>,
        container
    );
}

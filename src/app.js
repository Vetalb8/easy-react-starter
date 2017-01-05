import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import createStore from './state/store';
import { syncHistoryWithStore } from 'react-router-redux';
import getRoutes from './app.routes';

import './app.scss';

const store = createStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            { getRoutes() }
        </Router>
    </Provider>
    , document.getElementById('app'));

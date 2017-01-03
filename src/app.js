import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import './app.scss';

import renderRoutes from 'app.routes';

ReactDOM.render(
    <Router history={browserHistory}>
        { renderRoutes() }
    </Router>
    , document.getElementById('app'));

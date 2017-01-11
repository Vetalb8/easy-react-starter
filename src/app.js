import './app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import frLocaleData from 'react-intl/locale-data/fr';
import Root, { store } from './app.root';

addLocaleData([...enLocaleData, ...frLocaleData]);

// If browser doesn't support Intl (i.e. Safari), then we manually import
// the intl polyfill and locale data.
if (!window.Intl) {
    require.ensure([], require => {
        require('intl');
        start();
    }, 'intl-polyfill');
} else {
    start();
}

function start() {
    ReactDOM.render(
        <Provider store={store}>
            <Root/>
        </Provider>,
        document.getElementById('app')
    );
}

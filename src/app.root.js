import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Router, browserHistory } from 'react-router';
import configureStore from './state/store';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './app.routes';
import * as locales from './locales';

export const store = configureStore(browserHistory, __INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);

@connect((state) => {
    const locale = state.user.locale || 'en';
    // split locale with a region code
    const regionCode = locale.toLocaleLowerCase().split(/[-_]+/)[0];

    return {
        locale,
        regionCode
    };
})
export default class Root extends Component {
    static propTypes = {
        locale: PropTypes.string.isRequired,
        regionCode: PropTypes.string.isRequired
    };

    static defaultProps = {
        locale: 'en',
        regionCode: 'en'
    };

    getDevTools() {
        let component = null;

        if (__DEVTOOLS__ && !window.devToolsExtension) {
            component = require('./components/DevTools');
        }

        return component;
    }

    render() {
        const messages = locales[this.props.regionCode];

        return (
            <div>
                <IntlProvider locale={this.props.regionCode} messages={messages}>
                    <Router history={history}>
                        { routes }
                    </Router>
                </IntlProvider>
                {this.getDevTools()}
            </div>
        );
    }
}

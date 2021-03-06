import React, { PropTypes } from 'react';
import { FormattedMessage, FormattedDate, FormattedNumber } from 'react-intl';
import { Link } from 'react-router';

import './HomePage.scss';

const HomePageView = (props) => {
    const { titles } = props;

    return (
        <div>
            <Link to='/p'>To p</Link>
            <p>
                <FormattedMessage id='hello'/>
            </p>
            <p>
                <FormattedDate value={Date.now()}/>
            </p>
            <p>
                <FormattedNumber value={10000} style={'currency'} currency={'EUR'}/>
            </p>
            <ul>
                {titles.map((item, i) => {
                    return (
                        <li key={i}>{item}</li>
                    );
                })}
            </ul>
        </div>
    );
};

HomePageView.propTypes = {
    titles: PropTypes.any
};

export default HomePageView;

import React, { PropTypes } from 'react';

import './HomePage.scss';

const HomePageView = (props) => {
    const { titles } = props;

    return (
        <ul>
            {titles.map((item, i) => {
                return (
                    <li key={i}>{item}</li>
                );
            })}
        </ul>
    );
};

HomePageView.propTypes = {
    titles: PropTypes.any
};

export default HomePageView;

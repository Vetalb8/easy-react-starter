import React, { PropTypes } from 'react';

import './HomePage.scss';

const HomePageView = (props) => {
    const { home } = props;

    return (
        <ul>
            {home.data.children.map((item, i) => {
                return (
                    <li key={i}>{item.data.title}</li>
                );
            })}
        </ul>
    );
};

HomePageView.propTypes = {
    home: PropTypes.any
};

export default HomePageView;

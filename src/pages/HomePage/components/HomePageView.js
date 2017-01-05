import React, { PropTypes } from 'react';

import './HomePage.scss';

const HomePageView = (props) => {
    const { home } = props;

    return (
        <div>
            {home.text}
        </div>
    );
};

HomePageView.propTypes = {
    home: PropTypes.any
};

export default HomePageView;

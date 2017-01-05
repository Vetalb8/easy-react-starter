import React from 'react';

import './HomePage.scss';

const HomePageView = (props) => {
    const { text } = props;

    return (
        <div>
            {text}
        </div>
    );
};

HomePageView.propTypes = {
    text: React.PropTypes.string
};

export default HomePageView;

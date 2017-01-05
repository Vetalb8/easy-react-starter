import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomePageView from '../components/HomePageView';
import { loadHome } from '../../../state/modules/home';

@connect(
    (state /* , ownProps */) => ({
        home: state.home
    }),
    dispatch => bindActionCreators({ loadHome }, dispatch))
export default class HomePage extends Component {

    static propTypes = {
        home: PropTypes.any,
        loadHome: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.loadHome();
    }

    render() {
        return (<HomePageView {...this.props}/>);
    }
}

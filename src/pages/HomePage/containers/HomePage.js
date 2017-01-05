import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomePageView from '../components/HomePageView';
import { loadHome } from '../../../state/modules/home';

@connect(
    (state /* , ownProps */) => ({
        text: state.home.text
    }),
    dispatch => bindActionCreators({ loadHome }, dispatch))
export default class HomePage extends Component {

    static propTypes = {
        text: PropTypes.string,
        loadHome: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.loadHome();
    }

    render() {
        return (<HomePageView text={this.props.text}/>);
    }
}

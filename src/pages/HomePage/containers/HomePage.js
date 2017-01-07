import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import HomePageView from '../components/HomePageView';
import { loadHome } from '../../../actions/home';

const mapStateToProps = (state /* , props */) => {
    return {
        home: state.home
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadHome }, dispatch);
};

@connect(
    mapStateToProps,
    mapDispatchToProps)
@autobind
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

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as auth from '../../utils/auth';

const mapStateToProps = (state /* , props */) => {
    return {
        user: state.user
    };
};

@connect(mapStateToProps)
export default class RoleContent extends Component {
    static propTypes = {
        allow: PropTypes.any,
        user: PropTypes.any,
        children: PropTypes.array
    };

    render() {
        const authorized = auth.hasAllowed(this.props.user.roles, this.props.allow);

        return authorized ? <div>{ this.props.children }</div> :  null;
    }
}

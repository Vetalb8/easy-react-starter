import React, { Component } from 'react';
import HomePageView from '../components/HomePageView';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<HomePageView {...this}/>);
    }
}

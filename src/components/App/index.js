import React, { Component } from 'react';

class App extends Component {
    static propTypes = {
        children: React.PropTypes.any
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            {this.props.children}
          </div>
        );
    }
}

export default App;

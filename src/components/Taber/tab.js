import React, {Component} from 'react';

class Tab extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Tab;
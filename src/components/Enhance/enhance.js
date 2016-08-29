import React, {Component} from 'react';

export let Enhance = ComposedComponent => class extends Component {
    constructor() {
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        this.setState({ data: "hello!" });
    }


    render() {
        return (
            <ComposedComponent {...this.props} data={this.state.data}/>
        );
    }
}

class MyComponent {
    render() {
        if (!this.data) {
            return (
                <div>Waiting...</div>
            )
        } else {
            return (
                <div>{this.data}</div>
            )
        }
    }
}

export default Enhance(MyComponent);
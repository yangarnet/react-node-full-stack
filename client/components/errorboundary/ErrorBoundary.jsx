import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: {},
            errorInfo: {}
        };
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: info
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <p>Sorry, we are having a problem, our team are working on this</p>
                </div>
            );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;

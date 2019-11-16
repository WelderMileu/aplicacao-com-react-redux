import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    state = { count: 0 }

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    render() {
        return (
            <div className="container mt-5">
                <div>
                    <button className="btn btn-success h1" onClick={this.increment}>+</button>
                    <span className="text-success m-5 h1">{this.props.count}</span>
                    <button className="btn btn-danger h1" onClick={this.decrement}>-</button>
                </div>
            </div>
        );
    }
}

function mapStoreProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStoreProps)(Counter);

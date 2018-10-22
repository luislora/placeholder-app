import React, {Component} from 'react';

export default class Counter extends Component {
    render() {
        const {count, onIncreaseClick} = this.props;

        return (
            <div>
                <span>{count}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        );
    }
}
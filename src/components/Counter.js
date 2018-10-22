import React, {Component} from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wish_value: this.props.wish_value
        }
    }

    render() {
        const {count, onIncreaseClick, onUpdateClick} = this.props;

        return (
            <div>
                <span>{count}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                <input value={this.state.wish_value} type="text" onChange={onUpdateClick} />
            </div>
        );
    }
}
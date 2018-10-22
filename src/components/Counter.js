import React, {Component} from 'react';
import '../styles/counter.css';

export default class Counter extends Component {
    render() {
        const {count, onIncreaseClick} = this.props;

        return (
            <div className="second-container">
                <div className="row justify-content-md-center">
                    <div className="col-md-1 count-label">
                        <span>{count}</span>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-1">
                        <button className="btn btn-primary" onClick={onIncreaseClick}>Increase</button>
                    </div>
                </div>
            </div>
        );
    }
}
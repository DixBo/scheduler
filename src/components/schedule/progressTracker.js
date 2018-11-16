import React, { Component } from 'react';

class ProgressTracker extends Component {

    calaculateProgress = function() {
        return (this.props.amountEnrolled / this.props.amountPossible) * 100;
    }.bind(this);

    render() {
        return (
            <div className="progress-tracker">
                <div className="progress-tracker__title">Progress Tracker</div>
                <div className="progress-tracker__percentage">
                    {this.calaculateProgress()}%
                </div>
            </div>
        )
    }
}

export default ProgressTracker;
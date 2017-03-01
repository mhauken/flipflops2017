import React, { Component } from 'react';
import { pickTime } from './actions';

class TimePicker extends Component {
  pickTimeWrapper = (timeDuration) => () => {
    this.props.dispatch(pickTime(timeDuration));
  }

  render() {
    return (
      <div className="TimePicker">
        { this.props.timeDurations.map(timeDuration => <label><input type="radio" onClick={this.pickTimeWrapper()} />{timeDuration.label}</label> )}
      </div>
    );
  }
}

export default TimePicker;

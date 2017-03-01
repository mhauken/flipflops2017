import React, { Component } from 'react';
import { pickTime } from './actions';

class TimePicker extends Component {
  pickTimeWrapper = (timeDuration) => () => {
    this.props.dispatch(pickTime(timeDuration));
  }

  render() {
    return (
      <div className="TimePicker">
        { this.props.timeDurations.map(timeDuration => <label key={timeDuration.duration}><input name="duration" type="radio" onClick={this.pickTimeWrapper(timeDuration.duration)} />{timeDuration.label}</label> )}
      </div>
    );
  }
}

export default TimePicker;

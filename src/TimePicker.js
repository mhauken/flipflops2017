import React, { Component } from 'react';
import { pickTime } from './actions';
import styled from 'styled-components';

const TimePickWrapper = styled.div`
  width: 100%;
  display: table;
`
const TimePick = styled.div`
  text-align: center;
  display: table-cell;
  position: relative;
`;

const Label = styled.label`
  position: relative;
  cursor: pointer;
  &::after{
    content: '';
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  &:hover, &:active {
    &::after{
      background-color: #DFDFDF;
    }
  }

`

const Checkbox = styled.input`
  position:absolute;
  clip: rect(0,0,0,0);
  clip: rect(0 0 0 0);

  &:checked + label {
    color: #fff;
    &::after {
      background-color: #445561;
    }
  }
`


class TimePicker extends Component {
  pickTimeWrapper = (timeDuration) => () => {
    this.props.dispatch(pickTime(timeDuration));
  }

  render() {
    return (
      <TimePickWrapper>
      { this.props.timeDurations.map(timeDuration =>
        <TimePick key={timeDuration.duration}>
          <Checkbox id={timeDuration.duration}
            name="duration"
            type="radio"
            onClick={this.pickTimeWrapper(timeDuration.duration)} />
          <Label htmlFor={timeDuration.duration}>{timeDuration.label}</Label>
        </TimePick> )}
      </TimePickWrapper>
    );
  }
}

export default TimePicker;

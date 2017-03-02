import React, { Component } from 'react';
import { pickTime } from './actions';
import styled from 'styled-components';

const TimePickWrapper = styled.div`
  width: 100%;
  display: table;
  table-layout: fixed;
  padding-top: 24px;
`
const TimePick = styled.div`
  text-align: center;
  display: table-cell;
  position: relative;
`;

const Label = styled.label`
  position: relative;
  cursor: pointer;
  display: block;
  &::after{
    content: '';
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    z-index: -1;
    background-color: transparent;
    transition: transform .3s cubic-bezier(.4,.6,.42,1.35), background-color .2s;
  }
  &:hover, &:active {
    &::after{
      background-color: #DFDFDF;
      transform: translate(-50%, -50%) scale(1);
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
      transform: translate(-50%, -50%) scale(1);
    }
  }
`


class TimePicker extends Component {
  pickTimeWrapper = (timeDuration) => () => {
    this.props.dispatch(pickTime(timeDuration));
  }

  getCheckbox = (timeDuration) => {
    return timeDuration.isChosen ?
      <Checkbox id={timeDuration.duration}
                name="duration"
                type="radio"
                checked
                onClick={this.pickTimeWrapper(timeDuration.duration)} /> :
      <Checkbox id={timeDuration.duration}
              name="duration"
              type="radio"
              onClick={this.pickTimeWrapper(timeDuration.duration)} />
  }

  render() {
    return (
      <TimePickWrapper>
      { this.props.timeDurations.map(timeDuration =>
        <TimePick key={timeDuration.duration}>
          {this.getCheckbox(timeDuration)}
          <Label htmlFor={timeDuration.duration}>{timeDuration.label}</Label>
        </TimePick> )}
      </TimePickWrapper>
    );
  }
}

export default TimePicker;

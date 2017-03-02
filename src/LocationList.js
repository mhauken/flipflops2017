import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationItem from './LocationItem';
import TimePicker from './TimePicker';
import Wrapper from './styling/wrapper';

class LocationList extends Component {
  render() {
    return (
      <Wrapper>
        <TimePicker timeDurations={this.props.timeDurations} dispatch={this.props.dispatch}/>
        { this.props.timePicked && this.props.locations.map((location) => !location.hidden && <LocationItem key={location.id} {...location} />) }
      </Wrapper>
    );
  }
}

export default connect(state => state)(LocationList);

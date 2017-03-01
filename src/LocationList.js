import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationItem from './LocationItem';
import TimePicker from './TimePicker';

class LocationList extends Component {
  render() {
    return (
      <div className="LocationList">
        <TimePicker timeDurations={this.props.timeDurations} dispatch={this.props.dispatch}/>
        { this.props.locations.map((location) => !location.hidden && <LocationItem key={location.id} {...location} />) }
      </div>
    );
  }
}

export default connect(state => state)(LocationList);

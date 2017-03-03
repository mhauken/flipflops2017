import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationItem from './LocationItem';
import TimePicker from './TimePicker';
import Wrapper from './styling/wrapper';


const Colors = ['#FDD161', '#E8A13D', '#29A4AC', '#445561', '#AFD5D9'];

class LocationList extends Component {
  render() {
    return (
      <Wrapper>
        <TimePicker timeDurations={this.props.timeDurations} dispatch={this.props.dispatch}/>
        { this.props.timePicked && this.props.locations.map((location, index) => !location.hidden && <LocationItem color={Colors[index % Colors.length]}key={location.id} {...location} />) }
      </Wrapper>
    );
  }
}



export default connect(state => state)(LocationList);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import CommentList from './CommentList';
import OpenStreetMap from './OpenStreetMap';
import styled from 'styled-components';
import Wrapper from './styling/wrapper';
import {geolocated} from 'react-geolocated';
import getGeolocationDataForMap from './GeoLocationHelper';

const Back = styled(Link)`
  width: 100%;
  /*position: absolute;
  left: 0;
  top: 0;
  z-index: 999999999;
  min-height: 60px;*/
  display: inline-block;
  color: #445561;
  padding: 12px;
  text-decoration: none;
  &::before {
    content: "< ";
  }
`

const Picture = styled.div`
  width: 100%;
  height: 150px;
  margin-top: -48px;
  border-radius: 3px;
  border: 5px solid #fff;
  background-image: url(${props => props.image});
  z-index: 999;
  position: relative;
  margin-bottom: 12px;
  background-size: cover;
`

class LocationDetails extends Component {
  getLocation = () => {
    const id = this.props.routeParams.locationId;
    return this.props.locations.find(location => location.id == id);
  };

  getOpenStreetMap() {
    if (this.props.isGeolocationAvailable && this.props.coords) {
      const currentLocation = { lat: this.props.coords.latitude, lng: this.props.coords.longitude };
      const geolocationData = getGeolocationDataForMap(this.location.position, currentLocation);
      return <OpenStreetMap currentPosition={[this.props.coords.latitude, this.props.coords.longitude]}
                            position={[this.location.position.lat, this.location.position.lng]}
                            zoom={geolocationData.zoom}
                            middlePosition={geolocationData.midpoint}/>
    }
    return <OpenStreetMap position={[this.location.position.lat, this.location.position.lng]}
                          zoom={14}
                          middlePosition={{lat: this.location.position.lat, lng: this.location.position.lng}}/>
  }

  render() {
    this.location = this.getLocation();
    return (
      <div>
        <Back to="/">
          Go back
        </Back>
        {this.getOpenStreetMap()}
        <Wrapper>
          <Picture image={this.location.image}/>
          <p>{this.location.description}</p>

          <CommentList comments={this.location.comments} locationId={this.location.id} dispatch={this.props.dispatch}/>
        </Wrapper>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(connect(state => state)(LocationDetails));

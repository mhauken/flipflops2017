import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import CommentList from './CommentList';
import OpenStreetMap from './OpenStreetMap';
import styled from 'styled-components';
import Wrapper from './styling/wrapper';
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

const Title = styled.h1`

`

const Description = styled.p`
  margin-bottom: 24px;
`

class LocationDetails extends Component {
  getLocation = () => {
    const id = this.props.routeParams.locationId;
    return this.props.locations.find(location => location.id == id);
  };

  getOpenStreetMap() {
    //if (this.props.isGeolocationAvailable && this.props.coords) {
    console.log("prop", this.props);
    console.log("currentPositions", this.props.currentPosition);
    if (this.props.currentPosition) {
      const geolocationData = getGeolocationDataForMap(this.location.position, this.props.currentPosition);
      return <OpenStreetMap currentPosition={[this.props.currentPosition.lat, this.props.currentPosition.lng]}
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
		      <Title>{this.location.title}</Title>
          <Description>{this.location.description}</Description>
          <CommentList comments={this.location.comments} locationId={this.location.id} dispatch={this.props.dispatch}/>
        </Wrapper>
      </div>
    );
  }
}

export default connect(state => state)(LocationDetails);

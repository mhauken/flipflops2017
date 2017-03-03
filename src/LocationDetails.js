import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import CommentList from './CommentList';
import OpenStreetMap from './OpenStreetMap';
import styled, { keyframes } from 'styled-components';
import Wrapper from './styling/wrapper';
import DistanceFormatter from './DistanceFormatter';

const appear = keyframes`
  from {
    transform: translateY(-100px);
  }

  to {
    transform: translateY(0);
  }
`;

const Back = styled(Link)`
  width: 100%;
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
  background-position: center;
  animation: ${appear} .4s ease-in 1;
  box-shadow: 0px -4px 18px 0px rgba(0, 0, 0, 0.2);
`

const Title = styled.h1`
  margin-bottom: 6px;
  animation: ${appear} .4s ease-in 1;
`

const Description = styled.p`
  margin-bottom: 24px;
  animation: ${appear} .4s  ease-in 1;
`

const Walk = styled.span`
  font-size: 14px;
  color: #AFD5D9;
  margin-bottom: 8px;
  display: inline-block;
  animation: ${appear} .4s  ease-in 1;
`


class LocationDetails extends Component {
  getLocation = () => {
    const id = this.props.routeParams.locationId;
    return this.props.locations.find(location => location.id == id);
  };

  getOpenStreetMap() {
    if (this.props.currentPosition) {
      return <OpenStreetMap currentPosition={[this.props.currentPosition.lat, this.props.currentPosition.lng]}
                            position={[this.location.position.lat, this.location.position.lng]}
                            zoom={this.location.geoLocationData.zoom}
                            middlePosition={this.location.geoLocationData.midpoint}/>
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
          {this.location.geoLocationData && <Walk>{DistanceFormatter(this.location.geoLocationData.distance)} to location</Walk>}
          <Description>{this.location.description}</Description>
          <CommentList comments={this.location.comments} locationId={this.location.id} dispatch={this.props.dispatch}/>
        </Wrapper>
      </div>
    );
  }
}

export default connect(state => state)(LocationDetails);

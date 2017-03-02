import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CommentList from './CommentList';
import OpenStreetMap from './OpenStreetMap';
import styled from 'styled-components';
import Wrapper from './styling/wrapper';

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

  render() {
    const location = this.getLocation();
    return (
      <div>
        <Back to="/">
          Go back
        </Back>
          <OpenStreetMap position={[location.position.lat, location.position.lng]} zoom={20}/>
        <Wrapper>
          <Picture image={location.image} />
          <p>{location.description}</p>

          <CommentList comments={location.comments} locationId={location.id} dispatch={this.props.dispatch}/>
        </Wrapper>
      </div>
    );
  }
}

export default connect(state => state)(LocationDetails);

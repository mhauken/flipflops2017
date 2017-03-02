import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CommentList from './CommentList';
import OpenStreetMap from './OpenStreetMap';

class LocationDetails extends Component {
  getLocation = () => {
    const id = this.props.routeParams.locationId;
    return this.props.locations.find(location => location.id == id);
  };

  render() {
    const location = this.getLocation();
    return (
      <div>
        <div className="LocationDetails">
          <Link to="/" className="GoBackButton">
            <button type="btn">GO BACK</button>
          </Link>
          <img src={location.image} />
          <p>{location.description}</p>
        </div>

        <OpenStreetMap position={[location.position.lat, location.position.lng]} zoom={20}/>

        <CommentList comments={location.comments} locationId={location.id} dispatch={this.props.dispatch}/>
      </div>
    );
  }
}

export default connect(state => state)(LocationDetails);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentList from './CommentList';

class LocationDetails extends Component {
  getLocation = () => {
    const id = this.props.routeParams.locationId;
    return this.props.locations.find(location => location.id == id);
  }

  render() {
    const location = this.getLocation();
    return (
      <div>
        <div className="LocationDetails">
          <img src={location.image} />
          <p>{location.description}</p>
        </div>
        <CommentList comments={location.comments} locationId={location.id} dispatch={this.props.dispatch}/>
      </div>
    );
  }
}

export default connect(state => state)(LocationDetails);

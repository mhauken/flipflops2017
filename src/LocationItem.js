import React, { Component } from 'react';
import { Link } from 'react-router';
import TimeFormatter from './TimeFormatter';

class LocationItem extends Component {
  shortenDescription = () => {
    return `${this.props.description.substring(0, 10)}...`
  };


  render() {
    return (
      <Link to={`location/${this.props.id}`} className="LocationItem">
        <img src={this.props.image} />
        <h2>{this.props.title}</h2>
        <span>{TimeFormatter(this.props.timeDuration)}</span>
        <p>{this.shortenDescription()}</p>
      </Link>
    );
  }
}

export default LocationItem;

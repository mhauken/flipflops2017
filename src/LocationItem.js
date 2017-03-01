import React, { Component } from 'react';

class LocationItem extends Component {
  shortenDescription = () => {
    return `${this.props.description.substring(0, 10)}...`
  };

  render() {
    return (
      <a className="LocationItem">
        <img src={this.props.image} />
        <h2>{this.props.title}</h2>
        <p>{this.shortenDescription()}</p>
      </a>
    );
  }
}

export default LocationItem;

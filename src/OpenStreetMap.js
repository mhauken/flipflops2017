import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';

class OpenStreetMap extends React.Component {
  render() {
    return (
      <Map center={this.props.position} zoom={this.props.zoom} >
        <TileLayer url='http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png' />
        <Marker position={this.props.position}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default OpenStreetMap;

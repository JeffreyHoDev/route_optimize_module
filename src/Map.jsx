import React from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import { key } from './constant'


const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends React.Component {

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 1.2884,
            lng: 103.8233
          }
        }
      >
        <Marker position={{
            lat: 1.2884,
            lng: 103.8233
        }} 
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: key
})(MapContainer);
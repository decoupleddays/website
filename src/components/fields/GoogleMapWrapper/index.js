import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const GoogleMapWrapper = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 40.770393, lng: -73.988499 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 40.770393, lng: -73.988499 }} />
      )}
    </GoogleMap>
  ))
);

export default GoogleMapWrapper;

// src/App.js
import React,{useEffect} from "react";
import GoogleMapReact from 'google-map-react';
import { getLocation } from 'current-location-geo';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const handleApiLoaded = (map, maps) => {
    // Use Geocoding service to get the address of a location
    const geocoder = new maps.Geocoder();
    geocoder.geocode({ location: { lat: 37.7749, lng: -122.4194 } }, (results, status) => {
      if (status === 'OK') {
        console.log('Address:', results[0].formatted_address);
      } else {
        console.error('Geocoding failed:', status);
      }
    });
  };



  

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCfo8JdlaYIKDmUUlUAk9FuEyvOZbYZ_CI" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

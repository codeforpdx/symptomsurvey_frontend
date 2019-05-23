// portland lat: 45.516, lng: -122.679

import React from "react";
import fetch from "isomorphic-fetch";
import { compose, withProps, withHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";

import fakeData from "../fakeData.json";

const gKey = process.env.G_MAPS_KEY;

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${gKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 45.516, lng: -122.679 }}
  >
  <MarkerClusterer
        onClick={props.onMarkerClustererClick}
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
        {props.markers.map(marker => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            label={marker.user}
          />
        ))}
      </MarkerClusterer>
    </GoogleMap>
)

class MapClusterer extends React.PureComponent {
  componentWillMount() {
    this.setState({
      markers: []
    })
  }

  componentDidMount() {
    function convertTwitterToMarkers(data) {
      return data.filter(obj => obj.geo).map(obj =>
        ({
          id: obj.id,
          user: obj.user.screen_name,
          lat: obj.geo.coordinates[0],
          lng: obj.geo.coordinates[1]
        })
      )
    }

    this.setState({
      markers: convertTwitterToMarkers(fakeData)
    });
  }

  render() {
    return (
      <MapWithAMarkerClusterer markers={this.state.markers} />
    )
  }
}

export default MapClusterer;

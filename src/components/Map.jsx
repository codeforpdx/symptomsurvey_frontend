// AIzaSyAWRJnX0ewu1gSCusxK18jbVSmw8xBQGtI
// lat: 45.516, lng: -122.679

import React from "react";
import fetch from "isomorphic-fetch";
import { compose, withProps, withHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";

import fakeData from "../fakeData.json";

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAWRJnX0ewu1gSCusxK18jbVSmw8xBQGtI&v=3.exp&libraries=geometry,drawing,places",
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

    // ### DEFAULT METHOD from react-google-maps docs
    // ### use this when importing real data in the future?

    // const url = [
    //   // Length issue
    //   `https://gist.githubusercontent.com`,
    //   `/farrrr/dfda7dd7fccfec5474d3`,
    //   `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
    // ].join("")
    //
    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ markers: data.photos });
    //   });
  }

  render() {
    return (
      <MapWithAMarkerClusterer markers={this.state.markers} />
    )
  }
}

export default MapClusterer;

import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoidGhvbWFzcGhvcnRvbiIsImEiOiJjamMyd2djbDcwNWl5MnFueWtqcHYzaXlsIn0.WGRPx9lQwo74r15YW_QVvA';

var divStyle = {
  minHeight: "400px",
  width: "100%"
};

class Map extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      center: props.center
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data
  }

  componentDidMount() {

    console.log('<Map> componentDidMount');

    let center = [0, 0];

    if (this.state.center) {
      center = [this.state.center.lon, this.state.center.lat];
    }

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: center,
      zoom: 12
    });

    this.map.on('load', () => {
      this.map.addLayer({
        'id': '4f6b5cfc-31cd-433c-ae44-ec1d30f85a1e',
        'type': 'line',
        'source': {
          'type': 'geojson',
          'data': this.state.data
        },
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': '#888',
          'line-width': 8
        }
      });
    })

    this.map.resize();
  }

  render() {
    return (
      <div className="mapContainer">
        <div ref={el => this.mapContainer = el} style={divStyle}/>
      </div>
    );
  }
}

export default Map;

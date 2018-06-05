import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoidGhvbWFzcGhvcnRvbiIsImEiOiJjamMyd2djbDcwNWl5MnFueWtqcHYzaXlsIn0.WGRPx9lQwo74r15YW_QVvA';

var divStyle = {
  height: "100vh",
  width: "100vw"
};

class Map extends Component {

  constructor(props) {
    super(props);

    console.log('map constructor props:', props);

    this.state = {
      data: props.data,
      center: props.center
    }

    console.log('map:', this.state);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props.data);
    console.log('should update?', nextProps.data);
    console.log(this.props.data !== nextProps.data);
    return this.props.data !== nextProps.data
  }

  componentDidMount() {
    let center = [0, 0];

    console.log('did mount', this.state);

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
        }
      });
    })
  }

  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} style={divStyle}/>
      </div>
    );
  }
}

export default Map;

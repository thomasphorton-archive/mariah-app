import React, { Component } from 'react';
import Map from '../Map';

class Trip extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tripId: props.match.params.tripId
    }
  }

  componentWillMount() {
    fetch(`http://localhost:3001/trip/${this.state.tripId}`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          map: <Map data={data.geoJsonUrl} center={data.geoJsonCenter}/>
        })
      })
  }

  render() {

    return (
      <div>
        {this.state.map}
      </div>
    );
  }
}

export default Trip;

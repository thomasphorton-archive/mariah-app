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
        if (data.ts) {
          var time = new Date(data.ts);

          let dateStringOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'America/Los_Angeles'
          };

          let timeStringOptions = {
            timeZone: 'America/Los_Angeles'
          };

          this.setState({
            timeString: time.toLocaleTimeString('en-US', timeStringOptions),
            dateString: time.toLocaleDateString('en-US', dateStringOptions)
          });
        }

        this.setState({
          map: <Map data={data.geoJsonUrl} center={data.geoJsonCenter}/>
        });
      });
  }

  render() {
    return (
      <div>
        <h2 className="post-title">{this.state.dateString} {this.state.timeString}</h2>
        <p className="post-meta">trip id: {this.state.tripId}</p>
        {this.state.map}
      </div>
    );
  }
}

export default Trip;

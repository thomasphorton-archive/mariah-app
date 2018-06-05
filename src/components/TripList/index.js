import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TripList extends Component {

  constructor() {
    super();
    this.state = {
      trips: []
    }
  }

  componentWillMount() {
    fetch('http://localhost:3001/trips')
      .then(results => {
        return results.json();
      })
      .then(data => {

        let trips = data.map((trip) => {
          return(
            <li key={trip.tripId}>
              <Link to={{
                pathname: `/trip/${trip.tripId}`
              }}>{trip.tripId}</Link>
            </li>
          )
        });

        this.setState({
          trips: trips
        });

      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.trips}
        </ul>
      </div>
    );
  }
}

export default TripList;

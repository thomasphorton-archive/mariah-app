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
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/trips`)
      .then(results => {
        return results.json();
      })
      .then(data => {

        let trips = data.map((trip) => {
          let time = new Date(trip.ts);
          let dateStringOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          };

          let timeString = time.toLocaleTimeString('en-US');
          let dateString = time.toLocaleDateString('en-Us', dateStringOptions);

          return(
            <section
              className="trip"
              key={trip.tripId}>
              <Link to={{
                pathname: `/trip/${trip.tripId}`
              }}>
                <h2 className="post-title">{dateString} - {timeString}</h2>
                <p className="post-meta">{trip.tripId}</p>
              </Link>
            </section>
          )
        });

        this.setState({
          trips: trips
        });

      });
  }

  render() {
    return (
      <div className="trips">
        <h1 className="content-subhead">Recent Trips</h1>
        {this.state.trips}
      </div>
    );
  }
}

export default TripList;

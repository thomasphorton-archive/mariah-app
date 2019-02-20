import React, { Component } from 'react';
import { Connector } from 'mqtt-react';
import MessageList from '../MessageContainer';

class Trip extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tripId: props.match.params.tripId
    }
  }

  render() {
    return (
      <Connector mqttProps="ws://localhost:1883">
        <div>
          <h2 className="post-title">{this.state.dateString} {this.state.timeString}</h2>
          <p className="post-meta">trip id: {this.state.tripId}</p>
          <MessageList/>
        </div>
      </Connector>
    );
  }
}

export default Trip;

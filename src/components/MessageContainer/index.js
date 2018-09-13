import React, { Component } from 'react';
import { subscribe } from 'mqtt-react';

class MessageList extends Component {

  render(props) {

    var data;

    if (this.props.data[0]) {
      data = JSON.stringify(this.props.data[0].data);
    }

    return (
      <div>
        <p>{ data }</p>
      </div>
    );
  }
}

export default subscribe({
  topic: 'sensor-data'
})(MessageList);

import React, { Component } from 'react';
import { subscribe } from 'mqtt-react';
import Map from '../Map';

class MessageList extends Component {

  render(props) {
    // console.log(this.props.data);
    var data;

    if (this.props.data[0]) {
      data = JSON.stringify(this.props.data[0]);
      console.log(data);
    }

    return (
      <div>
        <Map  />
        <p>{ data }</p>
      </div>
    );
  }
}

export default subscribe({
  topic: 'gps-data'
})(MessageList);

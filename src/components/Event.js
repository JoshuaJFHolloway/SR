import React, { Component } from 'react';
import Header from './Header';
import Picture from './Picture';
import Form from './Form';
import Information from './Information';

class Event extends Component {
  constructor() {
    super();
    this.state = {
      form : {
        iNeedARoom: false,
        iHaveARoom: false,
        name: undefined,
        email: undefined,
      }
    }
  }


  render(){
    return (
      <div>
        <Header
          header={"SpeedRoomMating Brooklyn @ Matt Torrey's"}
        />
        <Picture
          picture={this.props.barPhoto}
        />
        <Form
        />
        <Information
        />
      </div>
    )
  }

}

export default Event;
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

  onClickHandler = (event) => {
    const { className } = event.target;
    const form =  this.state.form;

    form[className] = !form[className];

    if(form['iNeedARoom'] === true){
      form['iHaveARoom'] = false;
      this.setState({form});
    }

    if(form['iHaveARoom'] === true){
      form['iNeedARoom'] = false;
      this.setState({form});
    }

    this.setState({form});
  };


  render(){
    return (
      <div>
        <Header
          header={`SpeedRoomMating Brooklyn @ ${this.props.jsonData.event.location.name}`}
        />
        <Picture
          picture={this.props.barPhoto}
        />
        <Form
          onClickHandler={this.onClickHandler}
        />
        <Information
          jsonData = {this.props.jsonData}
        />
      </div>
    )
  }

}

export default Event;
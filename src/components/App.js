import React, {Component} from 'react';
import data from './../event';
import Picture from './Picture';
import Toolbar from './Toolbar';
import Event from './Event';
import SpareRoomLogo from './../assets/logo.png';
import BarPhoto from './../assets/bar-photo.jpg';

const columnStyle ={ verticalAlign: 'bottom', marginTop: "10px" };

class App extends Component {
  constructor() {
    super();

    this.state = {

      results: data,
      params: {
        eventsToolbarClicked: false,
        eventsNestedBarClicked: false
      }
    };
  };

  handleClickToggle = (event) => {
    const { className } = event.target;
    const params =  this.state.params;

    params[className] = !params[className];

    if(params['eventsToolbarClicked'] === false){
      params['eventsNestedBarClicked'] = false;
      this.setState({params});
    }

    this.setState({params});
  };

  render() {

    const params = this.state.params;

    return (
      <div>
        <Picture
          picture = {SpareRoomLogo}
          alt = {"SpareRoom Logo"}
        />
        <Toolbar
            eventHandler={this.handleClickToggle}
            tab1={"Home"}
            tab2={"Events"}
            className2={"eventsToolbarClicked"}
            width={"19%"}
        />
        <div style={columnStyle}>
          {params.eventsToolbarClicked ?
            <Toolbar
              eventHandler={this.handleClickToggle}
              tab1={"Events"}
              tab2={"Events"}
              tab3={"Events"}
              tab4={"Events"}
              className1={"eventsNestedBarClicked"}
              width={"21%"}
            /> : null}
        </div>
        <div>
          {params.eventsNestedBarClicked && params.eventsToolbarClicked ?
            <Event
              barPhoto={BarPhoto}
              /> : null}
        </div>

      </div>
    )
  }
}

export default App;
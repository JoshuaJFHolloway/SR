import React, {Component} from 'react';
import data from './../event';
import Logo from './Logo';
import Toolbar from './Toolbar';
import SpareRoomLogo from './../assets/logo.png';
import BarPhoto from './../assets/bar-photo.jpg';

class App extends Component {
  constructor() {
    super();

    this.state = {

      results: data,
    }
  };

  render() {
    return (
      <div>
        <Logo
          logo = {SpareRoomLogo}
          alt = {"SpareRoom Logo"}
        />
        <Toolbar
          />
      </div>
    )
  }
}

export default App;
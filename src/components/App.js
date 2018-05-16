import React, {Component} from 'react';
import data from './../event'
import Logo from './Logo'
import SpareRoomLogo from './../assets/logo.png'
import BarPhoto from './../assets/bar-photo.jpg'

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
      </div>
    )
  }
}

export default App;
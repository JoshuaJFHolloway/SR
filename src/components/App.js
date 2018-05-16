import React, {Component} from 'react';
import Logo from './Logo'
import data from '../event'

class App extends Component {
  constructor() {
    super();

    this.state = {
      results: {
        data
      }
        ,
      images: {
        logo: "../../assets/logo.png",
        bar_photo: "../../assets/bar-photo.jpg"
      }
    }
  };

render() {
  return (
    <div>
      <Logo/>
    </div>
    )
  }
}

export default App;
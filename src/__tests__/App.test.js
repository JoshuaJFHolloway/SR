import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App', () => {
  const app = shallow(<App/>);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  describe('Initializes state successfully', () =>{
    it('initializes results as an array of the event.json', () => {
      expect(app.state('results')).toHaveProperty("event.areas-covered")
    });
  });

});
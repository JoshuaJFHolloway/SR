import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from './../components/Toolbar';

describe("Toolbar", () => {
  const toolbar = shallow(<Toolbar/>);

  it("renders correctly", () => {
    expect(toolbar).toMatchSnapshot();
  })

});
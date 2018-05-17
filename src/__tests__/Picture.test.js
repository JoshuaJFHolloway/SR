import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../components/Picture';

describe('Logo', () => {
  const picture = shallow(<Picture/>);

  it('renders correctly', () => {
    expect(picture).toMatchSnapshot();
  });

});

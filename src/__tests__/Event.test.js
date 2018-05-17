import React from 'react';
import Event from './../components/Event';
import { shallow } from 'enzyme';

describe('Event', () => {

  const jsonData = {
    "event": {
      "location": {
        "name": "Matt Torrey's",
      }
    }
  };

  const event = shallow(<Event jsonData ={jsonData} />);

  it('renders a Headers component', () => {
    expect(event.find('Headers').exists()).toBe(true);
  });

  it("expects the Headers component to render `SpeedRoomMating Brooklyn @ Matt Torrey's", () => {
    expect(event.querySelector(".location_name"));
  });

});
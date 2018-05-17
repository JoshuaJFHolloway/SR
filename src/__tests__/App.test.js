import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App', () => {

  let app = shallow(<App/>);

  describe('Rendering components', () => {
    it('renders correctly', () => {
      expect(app).toMatchSnapshot();
    });

    it('renders a Logo component', () => {
      expect(app.find('Logo').exists()).toBe(true);
    });

    it('renders a Toolbar component', () => {
      expect(app.find('Toolbar').exists()).toBe(true);
    });

    // describe('Events not clicked', () => {
    //   beforeEach(() => {
    //     app = shallow(<App />);
    //   });
    //   it('does not render another Toolbar component', () => {
    //     expect(app.find('Toolbar').exists()).toBe(true);
    //   });
    // });

    // describe('Events is clicked', () => {
    //   beforeEach(() => {
    //     app.setState({eventsToolbarClicked: true})
    //   });
    //
    //   it('renders renders another Toolbar component', () => {
    //     expect(app.find('Toolbar').exists()).toBe(true);
    //   });
    // });

  });

  describe('initializes state successfully', () =>{
    it('initializes results that include the event.json', () => {
      expect(app.state('results')).toHaveProperty("event.areas-covered");
    });
  });

  describe('props successfully passing down to the Logo component', () =>{
    it('passes this.state.images.logo', () => {
      expect(app.find('Logo').prop('logo'))
    });
  });

  describe('updating the state', () => {
    beforeEach(() => {
      app = shallow(<App />);
    });

    it('should update the state when events is clicked', () => {
      const event = { target: { className: 'eventsToolbarClicked', value: true } };
      app.instance().handleClickToggle(event);
      expect(app.state('params')).toEqual({"eventsNestedBarClicked": false, "eventsToolbarClicked": true});
    });

    it("should update the state when the first 'events' on the nested toolbar is clicked", () => {
      const event2 = { target: { className: 'eventsToolbarClicked', value: true } };
      app.instance().handleClickToggle(event2);
      const event = { target: { className: 'eventsNestedBarClicked', value: true } };
      app.instance().handleClickToggle(event);
      expect(app.state('params')).toEqual({"eventsNestedBarClicked": true, "eventsToolbarClicked": true});
    });

    it('should change both states to false if eventsToolbar is false', () => {
      const event1 = { target: { className: 'eventsToolbarClicked', value: true } };
      app.instance().handleClickToggle(event1);
      const event2 = { target: { className: 'eventsNestedBarClicked', value: true } };
      app.instance().handleClickToggle(event2);
      const event3 = { target: { className: 'eventsToolbarClicked', value: false } };
      app.instance().handleClickToggle(event3);
      expect(app.state('params')).toEqual({"eventsNestedBarClicked": false, "eventsToolbarClicked": false});
    })



    //
    // it('saves output state when button is clicked', () => {
    //   form.instance().handleDisplayClick();
    //   expect(form.state('savedFirstScaleScore')).toEqual(99);
    // });
    //
    // it('should change the buttonClicked state to true', () => {
    //   form = shallow(<Form />);
    //   form.instance().handleDisplayClick();
    //   expect(form.state('buttonClicked')).toEqual(true);
    // });
  });



});
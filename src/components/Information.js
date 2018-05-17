import React from 'react';
// import Picture from './Picture';
// import Header from './Header';
// import HeaderWithText from './HeaderWithText';

const Information = (props) => {

  return (
    <div className={'location_name'}>
      {props.jsonData.event.location.name}
    </div>
  );
};

export default Information;

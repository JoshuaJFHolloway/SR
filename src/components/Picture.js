import React from 'react';

const Picture = (props) => {
  return (
  <div>
    <img src={props.picture} alt={props.alt}/>
  </div>
  )
};

export default Picture;
import React from 'react';

const Logo = (props) => {
  return (
  <div>
    <img src={props.logo} alt={props.alt}/>
  </div>
  )
};

export default Logo;
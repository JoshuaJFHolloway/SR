import React from 'react';

const toolbarStyle = { display: 'inline-block', verticalAlign: 'top', width: '19%' };

const Toolbar = (props) => {
  return (
    <div style={toolbarStyle} >
      <div style={toolbarStyle} >
        {props.tab1}
      </div>
      <div onClick={props.eventHandler} className={props.tab2} style={toolbarStyle}>
        {props.tab2}
      </div>
    </div>
  )
};

export default Toolbar;
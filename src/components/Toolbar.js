import React from 'react';

const Toolbar = (props) => {

  const toolbarStyle = { display: 'inline-block', verticalAlign: 'top', width: `${props.width}` };

  return (
    <div style={toolbarStyle} >
      <div onClick={props.eventHandler} className={props.className1} style={toolbarStyle}>
        {props.tab1}
      </div>
      <div onClick={props.eventHandler} className={props.className2} style={toolbarStyle}>
        {props.tab2}
      </div>
      <div onClick={props.eventHandler} className={props.className3} style={toolbarStyle}>
        {props.tab3}
      </div>
      <div onClick={props.eventHandler} className={props.className4} style={toolbarStyle}>
        {props.tab4}
      </div>
    </div>
  )
};

export default Toolbar;
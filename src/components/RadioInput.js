import React from 'react';

const RadioInput = (props) => {
  return (
    <div>
      <form>
        <input type="radio" className={props.name1} value={props.name1} onClick={props.onClickHandler}/>
          <input type="radio" className={props.name2} value={props.name2} onClick={props.onClickHandler}/>
      </form>
    </div>
  )
};

export default RadioInput;

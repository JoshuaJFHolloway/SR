import React from 'react';
import Header from './Header';
import RadioInput from './RadioInput';
import TextInput from './TextInput';

const Form = (props) => {
  return (
    <div>
      <Header
        header={"Reserve your place now"}
      />
      <RadioInput
        name1 = {"iNeedARoom"}
        name2 = {"iHaveARoom"}
        value1 = {"I need a room"}
        value2 = {"I have a room"}
        onClickHandler = {props.onClickHandler}
      />
      {/*<TextInput/>*/}
    </div>
  )
};

export default Form;
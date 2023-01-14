import React, {HTMLInputTypeAttribute} from 'react';

interface PropValidation {
  //тип инпута
  type: HTMLInputTypeAttribute,
  //значение
  value: HTMLInputTypeAttribute,
  //Замещающий текст
  placeholder: HTMLInputTypeAttribute
};

const DirectoryField = (props: PropValidation) => {
  const {value, type, placeholder} = props;
  return(
    <input
      type={type}
      value={value}
      placeholder={placeholder}
    />)
};

export default DirectoryField;
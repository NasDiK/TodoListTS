import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './DirectoryField.module.scss';

const DirectoryField = (props: any) => {
  const {value: propValue, type, placeholder, className, fullWidth, onChange} = props;

  const [val, setVal] = useState(propValue || '');

  return(
    <input
      type={type}
      value={propValue}
      placeholder={placeholder}
      className={cn(
        {
          [s.fullWidth]: fullWidth,
          className: className
        } 
      )}
      onChange={({target: {value}})=>onChange(value)}
    />)
};

DirectoryField.propTypes = {
  //Тип филда
  type: PropTypes.oneOf(['text']),
  //Значение
  value: PropTypes.string,
  //Замещающий текст
  placeholder: PropTypes.string,
  //Кастомный стиль
  className: PropTypes.string,
  //На полную ширину родителя
  fullWidth: PropTypes.bool,
  //Событие при изменении
  onChange: PropTypes.func.isRequired
};

DirectoryField.defaultProps = {
  placeholder: 'Введите значение',
  fullWidth: false,
  value: ''
}

export default DirectoryField;
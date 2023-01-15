import React from "react";
import s from '../../TodoList.module.scss';
import PropTypes from 'prop-types';

const TodoChips = (props: any) => {
  const {value, setValue} = props;

  const chipsOnClick = (oldValue) => {
    const newValue = prompt('Введите новый TODO', oldValue);

    if(newValue) {
      setValue(newValue);
    }
  };

  return (
    <div className={s.todoChips} onClick={()=>chipsOnClick(value)}>
      {value}
    </div>
  )
};

TodoChips.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired
};

export default TodoChips;
import React from "react";
import s from '../../TodoList.module.scss';
import PropTypes from 'prop-types';

const TodoChips = (props: any) => {
  const {todo, setTodoValue} = props;

  const chipsOnClick = (event, oldValue) => {
    const newValue = prompt('Введите новый TODO', oldValue);

    if(newValue) {
      setTodoValue(newValue);
    }
  };
  const {value} = todo;

  return (
    <div className={s.todoChips} onClick={(event)=>chipsOnClick(event, value)}>
      {value}
    </div>
  )
};

TodoChips.propTypes = {
  todo: PropTypes.object,
  setTodoValue: PropTypes.func.isRequired
};

export default TodoChips;
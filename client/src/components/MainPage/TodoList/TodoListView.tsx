import React from 'react';
import Typography from '../../shared/Base/Typography';
import s from './TodoList.module.scss';
import TodoChips from './commonComponents/TodoChips';
import { observer } from 'mobx-react';
import Button from '../../shared/Base/Button';
import variables from '../../shared/styles/globals.module.scss';

const createNewTodo = (setFunc: Function) => {
  const value = prompt('Новое TODO');

  if(value) {
    setFunc(null, value);
  }
};

const renderTodo = ({values, setValue, deleteValue}) => {
  console.log(values);
  if(!Object.keys(values).length) {
    return (
      <div><Typography className={variables.red}>Нет тудушек</Typography></div>
    );
  }

  return Object.keys(values).map((id: string) => {
    return (
      <div className={s.TodoLine}>
        <TodoChips key={id} value={values[id]} setValue={(val)=>setValue(id,val)} />
        <Button onClick={()=>deleteValue(id)}>Удалить</Button>
      </div>
    );
  });
};

const TodoListView = (props: any) => {
  const {TodoListStore: {values, setValue, deleteValue}} = props;

  return (
    <div className={s.todoWrapper}>
      <Typography className={s.title} weight={'bold'}>{'TODO List'}</Typography>
      {renderTodo({values, setValue, deleteValue})}
      <Button onClick={()=>createNewTodo(setValue)}>{'Добавить новую тудушку'}</Button>
    </div>
  );
};

export default observer(TodoListView);
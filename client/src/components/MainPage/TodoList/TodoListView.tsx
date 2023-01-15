import React from 'react';
import Typography from '../../shared/Base/Typography';
import s from './TodoList.module.scss';
import TodoChips from './commonComponents/TodoChips';
import { observer } from 'mobx-react';
import Button from '../../shared/Base/Button';

const createNewTodo = (setFunc: Function) => {
  const value = prompt('Новое TODO');

  if(value) {
    setFunc(null, value);
  }
};

const TodoListView = (props: any) => {
  const {TodoListStore: {values, setValue, deleteValue}} = props;

  return (
    <div className={s.todoWrapper}>
      <Typography className={s.title} weight={'bold'}>{'TODO List'}</Typography>
      {
        Object.keys(values).map((id: string) => {
          return (
            <div className={s.TodoLine}>
              <TodoChips key={id} value={values[id]} setValue={(val)=>setValue(id,val)} />
              <Button onClick={()=>deleteValue(id)}>Удалить</Button>
            </div>
          )
        })
      }
      <Button onClick={()=>createNewTodo(setValue)}>{'Добавить новую тудушку'}</Button>
    </div>
  );
};

export default observer(TodoListView);
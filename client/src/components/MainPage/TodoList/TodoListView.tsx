import React from 'react';
import Typography from '../../shared/Base/Typography';
import s from './TodoList.module.scss';
import TodoChips from './commonComponents/TodoChips';
import { observer } from 'mobx-react';
import Button from '../../shared/Base/Button';
import variables from '../../shared/styles/globals.module.scss';

const createNewTodo = (createTodoByValue: Function) => {
  const value = prompt('Новое TODO');

  if(value) {
    createTodoByValue({value});
  }
};

const renderTodo = (props: any) => {
  const {values} = props;

  if(!values.length) {
    return (
      <div><Typography className={variables.red}>Нет тудушек</Typography></div>
    );
  }
  
  return (
    <div>
      {values.map((todo, index)=><Item key={index} index={index} todo={todo} {...props} />)}
    </div>
  );

};



const Item = (props: any)=>{
  const {todo, setTodoValue, deleteTodo, moveTodo, index, values} = props;

  const tryMove = (oldIndex: number, newIndex: number) => {
    if(newIndex<0 || newIndex >= values.length ) {
      console.log('Неккоректное действие');
      return;
    };

    moveTodo(oldIndex, newIndex);
  };
  
  return (
    <div className={s.TodoLine}>
      <TodoChips todo={todo} setTodoValue={(val: any)=>setTodoValue(todo.id, val)} />
      <Button onClick={()=>deleteTodo(todo.id)}>Удалить</Button>
      <Button onClick={()=>tryMove(index, index-1)}>/\</Button>
      <Button onClick={()=>tryMove(index, index+1)}>\/</Button>
    </div>
  );
};

const TodoListView = (props: any) => {
  const {TodoListStore: {createTodo, sortedValues, deleteTodo, moveTodo, setTodoValue}} = props;

  return (
    <div className={s.todoWrapper}>
      <Typography className={s.title} weight={'bold'}>{'TODO List'}</Typography>
      {renderTodo({values: sortedValues, setTodoValue, deleteTodo, moveTodo})}
      <Button onClick={()=>createNewTodo(createTodo)}>{'Добавить новую тудушку'}</Button>
    </div>
  );
};

export default observer(TodoListView);
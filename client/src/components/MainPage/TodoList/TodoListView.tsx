import React from 'react';
import Typography from '../../shared/Base/Typography';
import s from './TodoList.module.scss';
import TodoChips from './commonComponents/TodoChips';
import { observer } from 'mobx-react';
import Button from '../../shared/Base/Button';
import variables from '../../shared/styles/globals.module.scss';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

const createNewTodo = (createTodoByValue: Function) => {
  const value = prompt('Новое TODO');

  if(value) {
    createTodoByValue({value});
  }
};

const renderTodo = ({values, setTodoValue, deleteTodo, onSortEnd}) => {
  if(!values.length) {
    return (
      <div><Typography className={variables.red}>Нет тудушек</Typography></div>
    );
  }

  return (
    <SortableList 
      setTodoValue={setTodoValue}
      values={values}
      deleteTodo={deleteTodo}
      axis={'y'}
      onSortEnd={onSortEnd}
      pressDelay={100}
    />
  );

};

const SortableList = SortableContainer<{setTodoValue: Function, values: Array<object>, deleteTodo: Function}>((props: any)=> {
  const {values} = props;
  return (<div>
    {values.map((todo: any, index: React.Key | null | undefined)=><SortableItem key={index} todo={todo} index={index} {...props} />)}
  </div>)
})

const SortableItem = SortableElement((props: any)=>{
  const {todo, setTodoValue, deleteTodo} = props;
  
  return (
    <div className={s.TodoLine}>
      <TodoChips todo={todo} setTodoValue={(val: any)=>setTodoValue(todo.id, val)} />
      <Button onClick={()=>deleteTodo(todo.id)}>Удалить</Button>
    </div>
  );
})

const TodoListView = (props: any) => {
  const {TodoListStore: {createTodo, sortedValues, deleteTodo, onSortEnd, setTodoValue}} = props;

  return (
    <div className={s.todoWrapper}>
      <Typography className={s.title} weight={'bold'}>{'TODO List'}</Typography>
      {renderTodo({values: sortedValues, setTodoValue, deleteTodo, onSortEnd})}
      <Button onClick={()=>createNewTodo(createTodo)}>{'Добавить новую тудушку'}</Button>
    </div>
  );
};

export default observer(TodoListView);
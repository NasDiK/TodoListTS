import React from "react";
import TodoListView from "./TodoListView";
import TodoListStore from "../../../stores/TodoList";

const TodoList = (props: any) => {
  const todoListStore = new TodoListStore();

  return (
    <TodoListView TodoListStore={todoListStore} />
  )
}

export default TodoList;
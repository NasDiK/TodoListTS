import { action, computed, makeObservable, observable, toJS } from "mobx";

type TodoItem = {
  id: number,
  value: string,
  weight: number
}

class TodoListStore {
  @observable todoValues: TodoItem[] = []; 

  constructor() {
    makeObservable(this);
    
    this.init();
  };

  async init() {
    await Promise.all([
      this.getTodoValues()
    ]);
  };

  @computed get sortedValues() { return this.todoValues?.slice().sort((a: any, b: any)=>a.weight-b.weight) }

  @action setNewWeight = (todoId, weight) => {
    const todo = this.todoValues.find(({id})=>id===todoId);
    if (todo) {
      todo.weight = weight;
    }
  }

  @action setTodoValue = (todoId, value) => {
    const todo = this.todoValues.find(({id})=>id===todoId);
    
    if(todo) {
      todo.value = value;
    }

    this.setTodoValues([...this.todoValues]);
  };

  @action setTodoValues = (todoValues) => {
    this.todoValues = todoValues;
  };

  createTodo = ({value}: {value: string}) => {
    const idsList: number[] = this.todoValues.map(({id})=>id);
    const newId = (idsList.length ? Math.max(...idsList) : 0) + 1;

    const currentTodos = [...this.todoValues];
    const weightsList = currentTodos.map(({weight})=>weight);
    const newWeight = (Math.max(...weightsList) || 0) + 1;

    const newTodo: TodoItem = {
      id: newId,
      value,
      weight: newWeight

    };
    this.setTodoValues([...currentTodos, newTodo]);
  };

  deleteTodo = (todoId: number) => {
    const currTodos = this.todoValues.filter(({id})=>todoId !== id);

    this.setTodoValues(currTodos);
  };

  getTodoValues = async() => {
    const toAdd = [
      {
        id: 1,
        value: 'Уроки делать',
        weight: 1
      },
      {
        id: 2,
        value: 'Делать уроки',
        weight: 2
      }
    ];

    this.setTodoValues(toAdd);
  };

  onSortEnd = (({oldIndex, newIndex}) => {
    const oldTodo = toJS(this.sortedValues[oldIndex]);
    const newTodo = toJS(this.sortedValues[newIndex]);

    this.setNewWeight(oldTodo.id, newTodo.weight);
    this.setNewWeight(newTodo.id, oldTodo.weight);

    this.setTodoValues([...this.todoValues]);
  });
};

export default TodoListStore;
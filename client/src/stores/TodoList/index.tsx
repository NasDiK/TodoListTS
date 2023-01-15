import { action, makeObservable, observable } from "mobx";

class TodoListStore {
  @observable values: object = {
    1: 'Попу мыть',
    2: 'Делать уроки'
  }; 
  
  constructor() {
    makeObservable(this);
  };

  @action setValue = (key: (string | null), value: string) => {
    if (!key) {
      const newId = this.getNewId();
      this.values[newId] = value;
    }
    else {
      this.values[key] = value;
    }
  };

  @action deleteValue = (key) => {
    delete this.values[key];
  }

  private getNewId = () => {
    // let i: number = 0;
    // const existingNumbers = Object.keys(this.values);
    // while(true) {
    //   if(existingNumbers.includes(String(i))) {
    //     i++;
    //   }
    //   else {return i; }
    // }
    const keyValues = Object.keys(this.values);

    const maxInExisting = keyValues.length ? Math.max(...keyValues.map(id=>Number(id))) : 0;
    return maxInExisting + 1;
  };
};

export default TodoListStore;
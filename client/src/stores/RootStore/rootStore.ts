import { action, makeObservable, observable } from 'mobx';
class RootStore {
  @observable isLogged:boolean = false;
  
  constructor() {
    makeObservable(this);
  }

  @action setIsLogged = (state: boolean) => {
    this.isLogged = state;
  };
};

export default RootStore;
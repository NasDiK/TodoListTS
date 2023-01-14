import { action, makeAutoObservable, observable } from "mobx";
import { iDict } from "../../utils/customTypes";

class AuthPageStore {
  @observable public credentials: iDict<string | null> = {
    'login': null,
    'password': null
  };

  constructor() {
    makeAutoObservable(this);

    this.init();
  };

  init() {}

  @action setCredentional = (key: any, value: any) => {
    this.credentials[key] = value;
  }
};

export default AuthPageStore;
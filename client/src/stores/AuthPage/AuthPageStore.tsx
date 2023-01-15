import { action, makeAutoObservable, observable } from "mobx";
import { iDict } from "../../utils/customTypes";

class AuthPageStore {
  @observable public credentials: iDict<string | null> = {
    'login': null,
    'password': null
  };

  public rootStore: any;

  constructor(rootStore) {
    makeAutoObservable(this);

    this.rootStore = rootStore;

    this.init();
  };

  init() {}

  @action setCredentional = (key: any, value: any) => {
    this.credentials[key] = value;
  }
};

export default AuthPageStore;
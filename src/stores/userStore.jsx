import { makeAutoObservable } from "mobx";

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  auth = false;

  login = (login, password) => {
    if (login && password) {
      this.auth = true;
      return true;
    }
    return false;
  };
}

const user1 = new UserStore();

export default user1;

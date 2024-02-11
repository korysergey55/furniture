import {
  makeObservable,
  observable,
  action,
  reaction,
  toJS,
} from 'mobx';

class ContactFormStore {
  userData = {};

  constructor() {
    makeObservable(this, {
      userData: observable,
      setUserData: action
    });

    reaction(
      () => this.userData,
      _ => console.log('mobx', toJS(this.userData))
    );
  }
  setUserData(data) {
    this.userData = { ...data };
  }
}
export default new ContactFormStore();

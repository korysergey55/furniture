import {
  makeAutoObservable,
  makeObservable,
  observable,
  action,
  reaction,
  toJS,
  configure,
  computed,
  runInAction,
} from 'mobx';

class NavModalStore {
  modal = false;

  constructor() {
    makeObservable(this, {
      modal: observable,
      setModal: action
    });

    // reaction(
    //   () => this.modal,
    //   _ => console.log('mobx', toJS(this.modal))
    // );
  }
  setModal() {
    this.modal = !this.modal;
  }
}
export default new NavModalStore();

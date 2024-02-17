import {
  makeObservable,
  observable,
  action,
  reaction,
  toJS,
} from 'mobx';

class MobileModalStore {
  modal = false;

  constructor() {
    makeObservable(this, {
      modal: observable,
      setModal: action
    });

    reaction(
      () => this.modal,
      _ => console.log('mobx', toJS(this.modal))
    );
  }
  setModal() {
    this.modal = !this.modal;
  }
}
export default new MobileModalStore();

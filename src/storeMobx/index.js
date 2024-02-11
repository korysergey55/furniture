import { createContext, useContext } from 'react';
import { configure } from 'mobx';
import NavModalStore from './NavModalStore';
import ContactFormStore from './FormStore'

configure({ enforceActions: 'observed' });

class RootStore {
  NavModalStore = NavModalStore;
  ContactFormStore = ContactFormStore
}

const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('You have forgot to use StoreProvider, shame on you.');
  }
  return store;
};

export default new RootStore();

import { createContext, useContext } from 'react';
import { configure, observable } from 'mobx';
import NavModalStore from './NavModalStore';

configure({ enforceActions: 'observed' });

class RootStore {
  NavModalStore = NavModalStore;
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

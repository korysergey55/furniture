import { createContext, useContext } from 'react';
import { configure } from 'mobx';
import PartfolioStore from './PartfolioStore'

configure({ enforceActions: 'observed' });

class RootStore {
  PartfolioStore = PartfolioStore
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
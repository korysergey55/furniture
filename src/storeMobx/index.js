import { createContext, useContext } from 'react';
import { configure } from 'mobx';
import MobileModalStore from './MobileModalStore';
import ContactFormStore from './FormStore'
import PartfolioStore from './PartfolioStore'

configure({ enforceActions: 'observed' });

class RootStore {
  MobileModalStore = MobileModalStore
  ContactFormStore = ContactFormStore
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
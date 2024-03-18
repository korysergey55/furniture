import axios from 'axios';
import {
  makeObservable,
  observable,
  action,
  reaction,
  toJS,
} from 'mobx';

import { productsArr } from '../sourses/products/products';

const BASE_URL = 'https://vitaly-furniture-default-rtdb.europe-west1.firebasedatabase.app/'

class PartfolioStore {
  modal = false;
  products = [...productsArr];
  contactFormMassage = {};
  footerFormPhone = null

  constructor() {
    makeObservable(this, {
      modal: observable,
      products: observable,
      contactFormMassage: observable,
      footerFormPhone: observable,

      setModal: action,
      setAllProducts: action,
      getAllProducts: action,
      getProduct: action,
      setUserMessageAPI: action,
      setFooterFormPhoneAPI: action
    });

    reaction(
      () => this.products,
      _ => console.log('mobx', toJS(this.products))
    );
  }
  setModal = () => {
    this.modal = !this.modal;
  }

  setAllProducts = (data) => {
    this.products = [...data];
  };

  getAllProducts = () => {
    return this.products
  };

  getProduct = (path) => {
    const product = this.products.find((item) => item.path === path)
    return product
  };

  setUserMessageAPI = async (data) => {
    this.contactFormMassage = data;
    try {
      const response = axios.post(`${BASE_URL}userMessage/.json`, data)
      return response
    } catch (error) {
      throw new Error(error)
    }
  }

  setFooterFormPhoneAPI = async (data) => {
    this.footerFormPhone = data;
    try {
      const response = axios.post(`${BASE_URL}callBackPhoneNumber/.json`, data)
      return response
    } catch (error) {
      throw new Error(error)
    }
  }

  setAllProductsAPI = async (data = []) => {
    data = [...productsArr]
    try {
      const response = axios.post(`${BASE_URL}products/.json`, data)
      return response
    } catch (error) {
      throw new Error(error)
    }
  }
}
export default new PartfolioStore();

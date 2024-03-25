import axios from 'axios';
import {
  makeObservable,
  observable,
  action,
  reaction,
  toJS,
} from 'mobx';
import { toast } from 'react-toastify';

import { productsArr } from '../sourses/products/products';

class PartfolioStore {
  modal = false;
  isLoading = false;
  products = [...productsArr];
  contactFormMassage = {};
  footerFormPhone = null;

  constructor() {
    makeObservable(this, {
      modal: observable,
      isLoading: observable,
      products: observable,
      contactFormMassage: observable,
      footerFormPhone: observable,

      setModal: action,
      setAllProducts: action,
      getAllProducts: action,
      getProduct: action,
      setUserMessageAPI: action,
      setFooterFormPhoneAPI: action,
    });

    reaction(
      () => this.products,
      _ => console.log('mobx', toJS(this.products))
    );
  }
  setModal = () => {
    this.modal = !this.modal;
  };

  setAllProducts = data => {
    this.products = [...data];
  };

  getAllProducts = () => {
    return this.products;
  };

  getProduct = path => {
    const product = this.products.find(item => item.path === path);
    return product;
  };

  setUserMessageAPI = async data => {
    this.contactFormMassage = data;
    try {
      const response = axios.post(`${process.env.REACT_APP_BASE_URL}userMessage/.json`, data);
      toast(`Thank you for your interest in our company. We will contact you within one working day.`, {
        theme: 'light',
      });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  setFooterFormPhoneAPI = async data => {
    this.footerFormPhone = data;
    try {
      const response = axios.post(`${process.env.REACT_APP_BASE_URL}callBackPhoneNumber/.json`, data);
      toast(`Thank you for your interest in our company. We will contact you within one working day.`, {
        theme: 'light',
      });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  setAllProductsAPI = async (data = []) => {
    data = [...productsArr];
    try {
      const response = axios.post(`${process.env.REACT_APP_BASE_URL}products/.json`, data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };
}
export default new PartfolioStore();

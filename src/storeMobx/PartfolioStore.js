import {
  makeObservable,
  observable,
  action,
  reaction,
  toJS,
  makeAutoObservable
} from 'mobx';
import { productsArr } from '../sourses/products/products';

class PartfolioStore {
  products = [...productsArr];

  constructor() {
    makeObservable(this, {
      products: observable,
      setAllProducts: action,
      getAllProducts: action,
      getProduct: action,
    });

    reaction(
      () => this.products,
      _ => console.log('mobx', toJS(this.products))
    );
  }
  setAllProducts(data) {
    this.products = [...data];
  };

  getAllProducts() {
    return this.products
  };

  getProduct(path) {
    const product = this.products.find((item) => item.path === path)
    return product
  };
}
export default new PartfolioStore();

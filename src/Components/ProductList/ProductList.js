import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../storeMobx/index';
import { toJS } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

import styles from './styles.module.scss';
import ProductItem from './ProductItem/ProductItem';

const ProductList = observer(() => {
  const { PartfolioStore } = useStore();
  const { products } = PartfolioStore;

  return (
    <ul className={styles.produc_list}>
      {toJS(products).map(product => (
        <ProductItem item={product} key={uuidv4()} />
      ))}
    </ul>
  );
});

export default ProductList;

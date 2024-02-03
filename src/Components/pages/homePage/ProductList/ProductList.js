import React from 'react'
import styles from './styles.module.scss'

import { productsArr } from '../../../../sourses/products/products'
import ProductItem from './ProductItem/ProductItem';

const ProductList = () => {
  return (
    <ul className={styles.produc_list}>
      {productsArr.map((product, index) =>
        (<ProductItem item={product} key={index} />)
      )
      }
    </ul>
  );
}

export default ProductList;
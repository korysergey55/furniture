import React from 'react'
import ProductList from '../homePage/ProductList/ProductList';
import styles from './styles.module.scss'

const ProductsPage = () => {
  return (
    <div className={styles.products}>
      <div className={styles.comtainer}>
        <h2>ProductsPage</h2>
        <ProductList />
      </div>
    </div>
  );
}

export default ProductsPage;
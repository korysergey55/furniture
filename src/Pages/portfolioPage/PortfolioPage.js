import React from 'react'
import { observer } from 'mobx-react';
import ProductList from '../../Components/ProductList/ProductList';

import styles from './styles.module.scss'

const PortfolioPage = observer(() => {
  return (
    <div className={styles.container}>
      <ProductList />
    </div>
  );
})

export default PortfolioPage;
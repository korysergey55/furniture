import React from 'react'
import styles from './styles.module.scss'
import { observer } from 'mobx-react';

import ProductList from '../../Components/ProductList/ProductList';

const PortfolioPage = observer(() => {
  return (
    <div className={styles.products}>
      <div className={styles.comtainer}>
        <ProductList />
      </div>
    </div>
  );
})

export default PortfolioPage;
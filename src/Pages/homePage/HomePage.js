import React from 'react';
import styles from './styles.module.scss';

import { observer } from 'mobx-react';
import { useNavigate } from 'react-router';
import { pathes } from '../../utiles/pathes/pathes';

import ProductList from '../../Components/ProductList/ProductList';

const HomePage = observer(() => {
  const navigate = useNavigate();
  return (
    <div className={styles.home_page}>
      <div className={styles.container}>
        <div className={styles.hero} />
        <div className={styles.wripper}>
          <h2 className={styles.title}> Bespoke Fitted Furniture</h2>
          <p className={styles.discription}>
            Vitaly furniture is a bespoke furniture company. We pride ourselves in top quality
            joinery and finishing services. With manufacturing facility in Cheadle we cover all
            surrounding areas producing tailor-made solutions for both private and commercial
            sectors. Vitaly furniture's goal is to create an environment where our clients feel
            happy, a place that reflects their individuality. This we perform with meticulous
            attention to detail.
          </p>
          <button
            type="button"
            className={styles.button}
            onClick={() => navigate(`${pathes.contact}`)}
          >
            Contact
          </button>
        </div>
        <ProductList />
      </div>
    </div>
  );
});

export default HomePage;

import React from 'react'
import { useNavigate } from 'react-router';
import styles from './styles.module.scss'
import ProductList from './ProductList/ProductList';

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.home_page}>
      <div className={styles.container}>
        <div className={styles.hero}></div>
        <div className={styles.wripper}>
          <h2 className={styles.title}>Truly Bespoke Fitted Furniture</h2>
          <p className={styles.discription}>
            Cabinet maker based in Lymm, Cheshire. Specialising in bespoke fitted wardrobes and furniture
          </p>
          <button
            type='button'
            className={styles.button}
            onClick={() => navigate('contacts')}
          >GET IN TOUCH
          </button>
        </div>
        <ProductList />
      </div>
    </div>
  );
}

export default HomePage;
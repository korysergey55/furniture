import React from 'react'
import { useNavigate } from 'react-router';
import styles from './styles.module.scss'

import ProductItem from './ProductItem/ProductItem';
import Image from '../../../sourses/images/hero/product-image.jpg'

const productsArr = [
  {
    src: Image,
    productName: 'Wardrobes',
    discription: 'Fitted Wardrobes made to fit the space available. '
  },
  {
    src: Image,
    productName: 'Alcove Cabinets',
    discription: 'Fitted Alcove Cabinets to fully utilise those awkward spaces.'
  }, {
    src: Image,
    productName: 'Fitted Cabinets',
    discription: 'Home office, Boot rooms, kitchens and more.We can make storage for any space in your home.'
  },]

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
        <ul className={styles.produc_list}>
          {productsArr.map((product, index) =>
            (<ProductItem item={product} key={index} />)
          )
          }
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
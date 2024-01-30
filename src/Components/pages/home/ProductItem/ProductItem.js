import React from 'react'
import styles from './styles.module.scss'
import { useNavigate } from 'react-router';
import defaultImage from '../../../../sourses/images/defaultPhoto.png'

const ProductItem = ({ item }) => {
  const navigate = useNavigate()
  return (
    <li className={styles.item}>
      <img className={styles.image} src={item.src || defaultImage} alt={item.productName || 'image'}></img>
      <h3 className={styles.title}>{item.productName}</h3>
      <p className={styles.discription}>{item.discription}</p>
      <button
        type='button'
        className={styles.button}
        onClick={() => navigate('contacts')}
      >View
      </button>
    </li>
  );
}

export default ProductItem;
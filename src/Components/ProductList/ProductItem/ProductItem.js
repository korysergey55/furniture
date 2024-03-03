import React from 'react'
import { useNavigate } from 'react-router';
import { pathes } from '../../../utiles/pathes/pathes';

import styles from './styles.module.scss'
import defaultImage from '../../../sourses/images/products/image-1.jpg'

const ProductItem = ({ item }) => {
  const navigate = useNavigate()
  return (
    <li className={styles.item}>
      <img
        className={styles.image}
        src={item.src || defaultImage}
        alt={item.productName + 'image' || 'image'}
        onClick={() => navigate(`${pathes.portfolio}/${item.path}`)} />
      <h3 className={styles.title}>{item.productName}</h3>
      <p className={styles.discription}>{item.discription}</p>
      <button
        type='button'
        className={styles.button}
        onClick={() => navigate(`${pathes.portfolio}/${item.path}`)}
      >View
      </button>
    </li>
  );
}

export default ProductItem;
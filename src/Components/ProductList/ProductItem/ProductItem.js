import React from 'react';
import { useNavigate } from 'react-router';
import { pathes } from '../../../utiles/pathes/pathes';

import styles from './styles.module.scss';

const ProductItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <li className={styles.item}>
      <img
        className={styles.image}
        src={item.image.src}
        srcSet={`${item.image.srcset} 2x`}
        alt={item.productName + 'image'}
        onClick={() => navigate(`${pathes.portfolio}/${item.path}`)}
      />
      <h3 className={styles.title}>{item.productName}</h3>
      <p className={styles.discription}>{item.discription}</p>
      <button
        type="button"
        className={styles.button}
        onClick={() => navigate(`${pathes.portfolio}/${item.path}`)}
      >
        View
      </button>
    </li>
  );
};

export default ProductItem;

import React from 'react';
import styles from './styles.module.scss';
import sprite from '../../sourses/icons/sprite.svg';

const Services = () => {
  return (
    <div className={styles.services_wripper}>
      <h2 className={styles.title}>We Provide You The Best Experience</h2>
      <ul className={styles.iconsList}>
        <li className={styles.item}>
          <svg className={styles.icon} aria-label="icon">
            <use href={sprite + '#icon-7-years'} />
          </svg>
        </li>
        <li className={styles.item}>
          <svg className={styles.icon} aria-label="icon">
            <use href={sprite + '#icon-guarantee-5'} />
          </svg>
        </li>
        <li className={styles.item}>
          <svg className={styles.icon} aria-label="icon">
            <use href={sprite + '#icon-free-design'} />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Services;

import React from 'react';
import { useNavigate } from 'react-router';

import styles from './styles.module.scss';
import { pathes } from '../../utiles/pathes/pathes';

const BookConsultation = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.bookingWripper}>
      <button className={styles.button} type="button" onClick={() => navigate(`${pathes.contact}`)}>
        Book Consultation
      </button>
      <h2 className={styles.title}>Booking is Easy, Free, and there’s No Obligation</h2>
    </div>
  );
};

export default BookConsultation;

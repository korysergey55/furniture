import React from 'react';
import { useNavigate } from 'react-router';
import { pathes } from '../../utiles/pathes/pathes';
import FeaturesList from '../../Components/featuresList/FeaturesList';

import styles from './styles.module.scss';
import iamgeOvner from '../../sourses/images/aboutUs/ovnerImage.jpg';
import sprite from '../../sourses/icons/sprite.svg';

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.about_us}>
      <div className={styles.hero} />
      <div className={styles.container}>
        <div className={styles.contentWripper}>
          <div className={styles.wripper}>
            <h2 className={styles.title}>About Us</h2>
            <p className={styles.discription}>
              Vitaly furniture is a small family business that was founded in 2017. Our commitment
              to innovation in production is the key to the best quality product. We have
              implemented many projects developed in collaboration with our in-house designers and
              architects.
              <br />
              <br />
              We are a bespoke furniture & joinery company, that prides ourselves on providing only
              the very best quality products and service to our clients. From design to installation
              we take care of everything ensuring impeccable quality for both product and service.
              Services Provided 3D design and interior design Free standing and fitted furniture.
              <br />
              <br />
              First, second and final fix joinery. Areas Served Cheshire, Manchester mainly but also
              nationwide in the private and commercial sector.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={iamgeOvner} alt="High quality installations" />
          </div>
        </div>
        <FeaturesList />
        <h2 className={styles.subtitle}>We Provide You The Best Experience</h2>
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
        <div className={styles.bookingWripper}>
          <button
            className={styles.button}
            type="button"
            onClick={() => navigate(`${pathes.contact}`)}
          >
            Book Consultation
          </button>
          <h2 className={styles.title}>Booking is Easy, Free, and there’s No Obligation</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

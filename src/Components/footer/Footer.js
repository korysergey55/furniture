import React from 'react';
import { NavLink } from 'react-router-dom';
import { contactInfo } from '../../utiles/contactInfo/contactInfo';
import { pathes } from '../../utiles/pathes/pathes';
import FooterForm from './footerForm/FooterForm';

import InstaIcon from '../icons/InstaIcon';
import styles from './styles.module.scss';
import sprite from '../../sourses/icons/sprite.svg';

const Footer = () => {
  const width = window.screen.width >= 768;
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo_wripper}>
          <NavLink className={styles.logo_footer} to={pathes.home}>
            VITALY
            <span className={styles.logo_footer_acsent}> FURNITURE</span>
          </NavLink>
          <p className={styles.text}>Specialising in bespoke fitted wardrobes and furniture</p>
        </div>
        <ul className={styles.contacts}>
          <li className={styles.item}>
            <a
              className={styles.link}
              href={`tel:+44${contactInfo.phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <svg className={styles.icon} aria-label="phone icon">
                <use href={sprite + '#icon-tel'}></use>
              </svg>
              +44 {contactInfo.phoneNumber}
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              href={`mailto:${contactInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <svg className={styles.icon} aria-label="email icon">
                <use href={sprite + '#icon-email'}></use>
              </svg>
              {contactInfo.email}
            </a>
          </li>
          <li className={styles.item}>
            <a
              className={styles.link}
              href={contactInfo.location}
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <svg className={styles.icon} aria-label="location icon">
                <use href={sprite + '#icon-location'}></use>
              </svg>
              {/* {contactInfo.address} */}
              Manchester Demmings Road
              <br />
              Industrial Estate, unit 25. SK8 2PE
            </a>
          </li>
        </ul>
        <div className={styles.form_wripper}>
          <FooterForm />
        </div>
        <div className={styles.social_wripper}>
          <h3 className={styles.social_title}>Follow us</h3>
          <ul className={styles.social_list}>
            <li className={styles.item}>
              <a
                className={styles.link}
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstaIcon wedth="30" height="30" />
              </a>
            </li>
            <li className={styles.item}>
              <a
                className={styles.link}
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={styles.icon} width="32" height="32" aria-label="facebook icon">
                  <use href={sprite + '#icon-facebook'}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copy_right}>
        <p className={styles.copy_right_text}>&#169; 2024 VITALY furniture. All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;

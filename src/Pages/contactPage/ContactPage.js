import React from 'react';
import ContactForm from '../../Components/contactForm/ContactForm';

import styles from './styles.module.scss';
import sprite from '../../sourses/icons/sprite.svg';
import { contactInfo } from '../../utiles/contactInfo/contactInfo';
import InstaIcon from '../../Components/icons/InstaIcon';

const ContactsPage = () => {
  return (
    <div className={styles.contacts_page}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.discription}>
          Get in touch to discuss your ideas. Any pictures and dimensions of the space would be great upon first contact
          to help with a guide price etc.
          <br />
          Feel free to give me a call, text or email whichever is most convenient.
        </p>
        <div className={styles.form_wripper}>
          <h3 className={styles.form_title}>Get in Touch</h3>
          <ul className={styles.contacts_list}>
            <li className={styles.item}>
              <p className={styles.text}>Phone</p>
              <a
                className={styles.link}
                href={`tel:+44${contactInfo.phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <svg className={styles.icon} aria-label="telephone icon">
                  <use href={sprite + '#icon-tel'}></use>
                </svg>
                +44 {contactInfo.phoneNumber}
              </a>
            </li>
            <li className={styles.item}>
              <p className={styles.text}>Email</p>
              <a className={styles.link} href={`mailto:${contactInfo.email}`} target="_blank" rel="noopener noreferrer">
                <svg className={styles.icon} aria-label="telephone icon">
                  <use href={sprite + '#icon-email'}></use>
                </svg>
                {contactInfo.email}
              </a>
            </li>
            <li className={styles.item}>
              <p className={styles.text}>Follow us</p>
              <ul className={styles.social_list}>
                <li className={styles.item}>
                  <a className={styles.link} href={contactInfo.instagram} target="_blank" rel="noopener noreferrer">
                    <InstaIcon wedth="20" height="20" />
                  </a>
                </li>
                <li className={styles.item}>
                  <a className={styles.link} href={contactInfo.facebook} target="_blank" rel="noopener noreferrer">
                    <svg className={styles.icon} width="32" height="32" aria-label="facebook icon">
                      <use href={sprite + '#icon-facebook'}></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;

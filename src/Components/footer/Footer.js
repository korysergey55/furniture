import React from 'react'
import { useState } from 'react'

import styles from './styles.module.scss'
import sprite from '../../sourses/icons/sprite.svg'
import { contactInfo } from '../../utiles/contactInfo/contactInfo'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wripper}>
          <a className={styles.logo_footer} href="/"
          >THE BEST<span className={styles.logo_footer_acsent}> FURNITURE</span>
          </a>
          <p className={styles.text}>
            Specialising in bespoke fitted wardrobes and furniture
          </p>
        </div>
        <ul className={styles.contacts}>
          <li className={styles.item}>
            <a className={styles.link}
              href={`tel:+44${contactInfo.address}`}
              target="_blank"
              rel="noopener noreferrer"
            > <svg className={styles.icon} aria-label="location icon">
                <use href={sprite + '#icon-location'}></use>
              </svg>
              {contactInfo.address}
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link}
              href={`tel:+44${contactInfo.phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            > <svg className={styles.icon} aria-label="telephone icon">
                <use href={sprite + '#icon-tel'}></use>
              </svg>
              +44 {contactInfo.phoneNumber}
            </a>
          </li>
        </ul>
        <div className={styles.form_wripper}>
          <form className={styles.footer_form} id='footer-form'>
            <label className={styles.label} htmlFor='phone'>Call back</label>
            <input className={styles.input}
              name='phone'
              id='phone'
              placeholder='Enter phone number please'
              required
            />
            <button className={styles.button}
              type='button'
              name='form-button'
              htmlFor='footer-form'
            >SEND</button>
          </form>
        </div>
        <div className={styles.social_wripper}>
          <h3 className={styles.social_title}>Follow us</h3>
          <ul className={styles.social_list}>
            <li className={styles.item}>
              <a className={styles.link}
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={styles.icon} width="32" height="32" aria-label="instagram icon">
                  <use href={sprite + '#icon-instagram'}></use>
                </svg>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link}
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer">
                <svg className={styles.icon} width="32" height="32" aria-label="facebook icon">
                  <use href={sprite + '#icon-facebook'}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
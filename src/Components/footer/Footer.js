import React from 'react'
import styles from './styles.module.scss'
import sprite from '../../sourses/icons/sprite.svg'

import { useState } from 'react'

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
        <div className={styles.form_wripper}>
          <form className={styles.footer_form} id='footer-form'>
            <label className={styles.label} for='footer-form'>Call back</label>
            <input className={styles.input}
              name='footer-form'
              id='footer-form-input'
              placeholder='Phone number'
              required
            />
            <button className={styles.button}
              type='submit'
              name='form-button'
              htmlFor='footer-form'
            >SEND</button>
          </form>
        </div>
        <div className={styles.social_wripper}>
          <h3 className={styles.social_title}>Social media</h3>
          <ul className={styles.social_list}>
            <li className={styles.item}>
              <a className={styles.link}
                href='https://www.instagram.com/'
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
                href='https://www.facebook.com/'
                target="_blank"
                rel="noopener noreferrer">
                <svg className={styles.icon} width="32" height="32" aria-label="facebook icon">
                  <use href={sprite + '#icon-facebook'}></use>
                </svg>
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link}
                href='https://www.tiktok.com/'
                target="_blank"
                rel="noopener noreferrer">
                <svg className={styles.icon} width="42" height="42" aria-label="tiktok icon">
                  <use href={sprite + '#icon-tiktok-thin'}></use>
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
import React, { Component } from 'react'
import styles from './styles.module.scss'
import { NavLink } from 'react-router-dom'
import sprite from '../../sourses/icons/sprite.svg'
import logo from '../../sourses/icons/logo.svg'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logo} href=''>
          <svg className={styles.icon} width="150" height="50" aria-label="instagram icon">
            <use href={sprite + '#icon-logo'}></use>
          </svg>
        </a>
        <ul className={styles.nav_list}>
          <li className={styles.item}>
            <NavLink
              to='/'
              exact={true}
              className={styles.nav_link}
              activeClassName={styles.nav_link_active}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to='/'
              exact={true}
              className={styles.nav_link}
              activeClassName={styles.nav_link_active}
            >
              About us
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to='/products'
              exact={true}
              className={styles.nav_link}
              activeClassName={styles.nav_link_active}
            >
              Products
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to='/contacts'
              exact={true}
              className={styles.nav_link}
              activeClassName={styles.nav_link_active}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
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
                <use href={sprite + '#icon-tiktok'}></use>
              </svg>
            </a>
          </li>
        </ul>
        <ul className={styles.contacts}>
          <li className={styles.item}>
            <a className={styles.link}
              href={`tel:+44 734166645`}
              target="_blank"
              rel="noopener noreferrer"
            >+44 734166645
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link}
              href={`mailto:furniture@gmail.com`}
              target="_blank"
              rel="noopener noreferrer">
              furniture@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
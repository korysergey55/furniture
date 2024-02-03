import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation, NavLink } from 'react-router-dom'

import styles from './styles.module.scss'
import sprite from '../../sourses/icons/sprite.svg'
import classnames from 'classnames'

const Header = () => {
  const location = useLocation()
  const [state, setState] = useState(false)

  useEffect(() => {
    if (!state) handleMenu()
  }, [location.pathname])


  const handleMenu = () => {
    setState(!state)
  }

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logo} href='/'>
          <svg className={styles.logo_icon} aria-label="logo icon">
            <use href={sprite + '#icon-logo'}></use>
          </svg>
        </a>
        <ul className={styles.nav_list}>
          <li className={styles.item}>
            <NavLink
              to='/'
              exact={true}
              className={(navData) => navData.isActive ? styles.active : styles.nav_link}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to='/products'
              exact={true}
              className={(navData) => navData.isActive ? styles.active : styles.nav_link}
            >
              Products
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to='/about'
              exact={true}
              className={(navData) => navData.isActive ? styles.active : styles.nav_link}
            >
              About us
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to='/contacts'
              exact={true}
              className={(navData) => navData.isActive ? styles.active : styles.nav_link}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
        <div className={classnames({
          [styles.nav_wripper_mobile]: true,
          [styles.nav_wripper_mobile_show]: state
        })}>
          <button className={styles.modal_close_button}
            onClick={handleMenu}>
            <svg className={styles.icon} aria-label="modal close icon">
              <use href={sprite + '#icon-modal-close'}></use>
            </svg>
          </button>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink
                to='/'
                exact={true}
                className={(navData) => navData.isActive ? styles.active : styles.nav_link}
                onClick={handleMenu}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to='/products'
                exact={true}
                className={(navData) => navData.isActive ? styles.active : styles.nav_link}
                onClick={handleMenu}
              >
                Products
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to='/about'
                exact={true}
                className={(navData) => navData.isActive ? styles.active : styles.nav_link}
                onClick={handleMenu}
              >
                About us
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to='/contacts'
                exact={true}
                className={(navData) => navData.isActive ? styles.active : styles.nav_link}
                onClick={handleMenu}
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
        </div>
        <button
          className={classnames({
            [styles.button_menu_hamburger]: true,
            [styles.button_menu_hamburger_dasable]: !state,
          })}
          onClick={handleMenu}>
          <svg className={styles.icon_menu_hamburger}
            width="30"
            height="30"
            aria-label="mobile menu icon">
            <use href={sprite + '#icon-menu-hamburger'}></use>
          </svg>
        </button>
        <div className={styles.contacts}>
          <a className={styles.link}
            href={`tel:+44 7341666453`}
            target="_blank"
            rel="noopener noreferrer"
          > <svg className={styles.icon} aria-label="telephone icon">
              <use href={sprite + '#icon-tel'}></use>
            </svg>
            +44 7341666453
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation, NavLink } from 'react-router-dom'

import styles from './styles.module.scss'
import sprite from '../../sourses/icons/sprite.svg'
import classnames from 'classnames'

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [state, setState] = useState(false)

  // useEffect(() => {
  //   console.log(state)
  // }, [state])

  useEffect(() => {
    handleMenu()
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
                className={styles.nav_link}
                activeClassName={styles.nav_link_active}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to='about'
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
        </div>

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
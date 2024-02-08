import React from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../storeMobx'

import { useState, useEffect } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { pathes } from '../../utiles/pathes/pathes'
import { contactInfo } from '../../utiles/contactInfo/contactInfo'


import styles from './styles.module.scss'
import sprite from '../../sourses/icons/sprite.svg'
import classnames from 'classnames'

const Header = observer(() => {
  const { NavModalStore } = useStore()
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
        <a className={styles.logo} href={pathes.home}>
          <svg className={styles.logo_icon} aria-label="logo icon">
            <use href={sprite + '#icon-logo'}></use>
          </svg>
        </a>
        <ul className={styles.nav_list}>
          <li className={styles.item}>
            <NavLink
              to={pathes.home}
              className={(navData) => navData.isActive ? styles.active : styles.nav_link}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={pathes.about}
              className={(navData) => navData.isActive ? styles.active : styles.nav_link}
            >
              About
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={pathes.services}
              className={(navData) => navData.isActive ? styles.active : styles.nav_link}
            >
              Services
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={pathes.process}
              className={(navData) => navData.isActive ? styles.active : styles.nav_link}
            >
              Process
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={pathes.portfolio}
              className={(navData) => navData.isActive ? styles.active : styles.nav_link}
            >
              Portfolio
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={pathes.contact}
              className={(navData) => navData.isActive ? styles.active : styles.nav_link}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button
          className={classnames({
            [styles.button_menu_hamburger]: true,
            [styles.button_menu_hamburger_dasable]: !state,
          })}
          onClick={() => NavModalStore.setModal()}>
          <svg className={styles.icon_menu_hamburger}
            width="30"
            height="30"
            aria-label="mobile menu icon">
            <use href={sprite + '#icon-menu-hamburger'}></use>
          </svg>
        </button>
        {/* <div className={styles.contacts}>
          <a className={styles.link}
            href={`tel:+44${contactInfo.phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          > <svg className={styles.icon} aria-label="telephone icon">
              <use href={sprite + '#icon-tel'}></use>
            </svg>
            +44 {contactInfo.phoneNumber}
          </a>
        </div> */}
      </div>
    </div >
  );
})

export default Header;
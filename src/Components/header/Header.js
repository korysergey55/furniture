import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../storeMobx'

import { NavLink, useLocation } from 'react-router-dom'
import { pathes } from '../../utiles/pathes/pathes'

import styles from './styles.module.scss'
import sprite from '../../sourses/icons/sprite.svg'
import classnames from 'classnames'
import scrollController from '../../utiles/scrollController/scrollController'

const Header = observer(() => {
  const { MobileModalStore } = useStore()
  const { modal } = MobileModalStore
  const location = useLocation()

  useEffect(() => {
    if (modal) { scrollController.disabledScroll() }
    else { scrollController.enabledScroll() }
  }, [modal])

  useEffect(() => {
    setTimeout(() => {
      window.scroll({ top: 0 })
    }, 10)
  }, [location.pathname])

  const handleMobileMenu = () => {
    MobileModalStore.setModal()
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
            [styles.button_menu_hamburger_dasable]: modal,
          })}
          onClick={handleMobileMenu}>
          <svg className={styles.icon_menu_hamburger}
            width="30"
            height="30"
            aria-label="mobile menu icon">
            <use href={sprite + '#icon-menu-hamburger'}></use>
          </svg>
        </button>
      </div>
    </div >
  );
})

export default Header;
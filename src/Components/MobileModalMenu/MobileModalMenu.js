import React from 'react'
import { useStore } from '../../storeMobx'
import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'
import { pathes } from '../../utiles/pathes/pathes'
import { contactInfo } from '../../utiles/contactInfo/contactInfo'

import styles from './styles.module.scss'
import sprite from '../../sourses/icons/sprite.svg'
import InstaIcon from '../icons/InstaIcon'

const MobileModalMenu = observer(() => {
  const { PartfolioStore } = useStore()

  const hadleModal = () => {
    PartfolioStore.setModal()
  }
  return (
    <div className={styles.nav_wripper_mobile}>
      <button className={styles.modal_close_button}
        onClick={hadleModal}>
        <svg className={styles.icon} aria-label="modal close icon">
          <use href={sprite + '#icon-modal-close'}></use>
        </svg>
      </button>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            to={pathes.home}
            className={(navData) => navData.isActive ? styles.active : styles.nav_link}
            onClick={hadleModal}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={pathes.about}
            className={(navData) => navData.isActive ? styles.active : styles.nav_link}
            onClick={hadleModal}
          >
            About
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={pathes.process}
            className={(navData) => navData.isActive ? styles.active : styles.nav_link}
            onClick={hadleModal}
          >
            Process
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={pathes.portfolio}
            className={(navData) => navData.isActive ? styles.active : styles.nav_link}
            onClick={hadleModal}
          >
            Portfolio
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={pathes.contact}
            className={(navData) => navData.isActive ? styles.active : styles.nav_link}
            onClick={hadleModal}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className={styles.contacts}>
        <a className={styles.link}
          href={`tel:+44${contactInfo.phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        > <svg className={styles.icon} aria-label="telephone icon">
            <use href={sprite + '#icon-tel'}></use>
          </svg>
          +44 {contactInfo.phoneNumber}
        </a>
      </div>
      <ul className={styles.social_list}>
        <li className={styles.item}>
          <a className={styles.link}
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstaIcon wedth='30' height='30' />
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
  );
})

export default MobileModalMenu;
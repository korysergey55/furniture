import React, { useState } from 'react'
import styles from './styles.module.scss'

import { observer } from 'mobx-react';
import { useStore } from '../../../storeMobx/index';

const FooterForm = observer(() => {
  const [state, setState] = useState({ phoneNumber: '' })
  const { PartfolioStore } = useStore()

  const handleChange = (evt) => {
    setState({ phoneNumber: evt.target.value })
  }

  const handleSubmit = () => {
    PartfolioStore.setFooterFormPhone(state)
    setState({ phoneNumber: '' })
  }

  return (
    <form className={styles.footerForm} id='footer-form' >
      <label className={styles.label} htmlFor='phone'>Call back</label>
      <input className={styles.input}
        name='phone'
        value={state.phoneNumber}
        type='tel'
        id='phone'
        placeholder='Enter phone number please'
        required
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
      />
      <button className={styles.button}
        type='button'
        name='form-button'
        htmlFor='footer-form'
        onClick={handleSubmit}
      >
        SEND
      </button>
    </form >
  );
})

export default FooterForm;
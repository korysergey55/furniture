import React, { useState } from 'react'
import { useStore } from '../../../../storeMobx'
import styles from './styles.module.scss'

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
}

const ContactForm = () => {
  const [state, setState] = useState({ ...INITIAL_STATE })
  const { ContactFormStore } = useStore()

  const handleChange = (evt) => {
    evt.preventDefault()
    setState((prev) => ({
      ...prev, [evt.target.name]: evt.target.value
    }))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    ContactFormStore.setUserData(state)
    setState({ ...INITIAL_STATE })
  }
  return (
    <form className={styles.form} name='form' id='contactForm' onSubmit={handleSubmit}>
      <div className={styles.inpurs_container}>
        <div className={styles.label_wripper}>
          <label className={styles.label} htmlFor='firstName'>First Name</label>
          <input
            className={styles.input}
            name='firstName'
            value={state.firstName}
            id='firstName'
            onChange={handleChange}
          />
        </div>
        <div className={styles.label_wripper}>
          <label className={styles.label} htmlFor='lastName'>Last Name</label>
          <input
            className={styles.input}
            name='lastName'
            value={state.lastName}
            id='lastName'
            onChange={handleChange}
          />
        </div>
        <div className={styles.label_wripper}>
          <label className={styles.label} htmlFor='email'>Email*</label>
          <input
            className={styles.input}
            name='email'
            value={state.email}
            type={'email'}
            id='email'
            required
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.label_wripper}>
        <label className={styles.label} htmlFor='message'>Message</label>
        <textarea
          className={styles.textarea}
          name='message'
          value={state.message}
          id='message'
          onChange={handleChange}
        />
      </div>
      <button className={styles.button}
        type='submit'
        htmlFor='contactForm'
      >SEND</button>
    </form>
  );
}

export default ContactForm;
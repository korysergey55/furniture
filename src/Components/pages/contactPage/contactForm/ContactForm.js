import React from 'react'
import styles from './styles.module.scss'


const ContactForm = () => {
  return (
    <form className={styles.form} id='contact-form'>
      <div className={styles.inpurs_container}>
        <div className={styles.label_wripper}>
          <label className={styles.label} htmlFor='first-name'>First Name</label>
          <input className={styles.input}
            name='first-name'
            id='first-name'
          />
        </div>
        <div className={styles.label_wripper}>
          <label className={styles.label} htmlFor='last-name'>Last Name</label>
          <input className={styles.input}
            name='last-name'
            id='last-name'
          />
        </div>
        <div className={styles.label_wripper}>
          <label className={styles.label} htmlFor='email'>Email*</label>
          <input className={styles.input}
            type={'email'}
            name='email'
            id='email'
            required
          />
        </div>
      </div>
      <div className={styles.label_wripper}>
        <label className={styles.label} htmlFor='message'>Message</label>
        <textarea className={styles.textarea}
          name='message'
          id='message'
        />
      </div>
      <button className={styles.button}
        type='button'
        name='contact-form'
        htmlFor='contact-form'
      >SEND</button>
    </form>
  );
}

export default ContactForm;
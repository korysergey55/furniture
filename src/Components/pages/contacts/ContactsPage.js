import React from 'react'
import ContactForm from './contactForm/ContactForm';
import styles from './styles.module.scss'
import sprite from '../../../sourses/icons/sprite.svg'

const ContactsPage = () => {
  return (
    <div className={styles.contacts_page}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.discription}>
          Get in touch to discuss your ideas. Any pictures and dimensions
          of the space would be great upon first contact to help with a guide
          price etc. Feel free to give me a call, text or email  - whichever is most convenient.
        </p>
        <div className={styles.form_wripper}>
          <h3 className={styles.form_title}>Get in Touch</h3>
          <ul className={styles.contacts_list}>
            <li className={styles.item}>
              <p className={styles.text}>Phone</p>
              <a className={styles.link}
                href={`tel:+44 734166645`}
                target="_blank"
                rel="noopener noreferrer"
              > <svg className={styles.icon} aria-label="telephone icon">
                  <use href={sprite + '#icon-tel'}></use>
                </svg>
                +44 734166645
              </a>
            </li>
            <li className={styles.item}>
              <p className={styles.text}>Email</p>
              <a className={styles.link}
                href={`mailto:furniture@gmail.com`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={styles.icon} aria-label="telephone icon">
                  <use href={sprite + '#icon-email'}></use>
                </svg>
                furniture@gmail.com
              </a>
            </li>
          </ul>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
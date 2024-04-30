import React, { useEffect, useState } from 'react';
import { useStore } from '../../storeMobx/index';

import scrollController from '../../utiles/scrollController/scrollController';
import Loader from '../loader/Loader';

import styles from './styles.module.scss';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const { PartfolioStore } = useStore();
  const [state, setState] = useState({ ...INITIAL_STATE });
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (loader) {
      scrollController.disabledScroll();
    } else {
      scrollController.enabledScroll();
    }
  }, [loader]);

  const handleChange = evt => {
    evt.preventDefault();
    setState(prev => ({
      ...prev,
      [evt.target.name]: evt.target.value,
    }));
  };

  const submitNewMassage = async () => {
    try {
      setLoader(true);
      await PartfolioStore.setUserMessageAPI(state);
      setState({ ...INITIAL_STATE });
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    submitNewMassage();
  };

  return (
    <form className={styles.form} name="form" id="contactForm" onSubmit={handleSubmit}>
      {loader && <Loader />}
      <div className={styles.inputs_container}>
        <div className={styles.label_wripper}>
          <label className={styles.label} htmlFor="firstName">
            First Name*
          </label>
          <input
            className={styles.input}
            name="firstName"
            value={state.firstName}
            required
            min={3}
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className={styles.label_wripper}>
          <label className={styles.label} htmlFor="lastName">
            Last Name*
          </label>
          <input
            className={styles.input}
            name="lastName"
            value={state.lastName}
            required
            min={3}
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className={styles.label_wripper}>
          <label className={styles.label} htmlFor="email">
            Email*
          </label>
          <input
            className={styles.input}
            name="email"
            value={state.email}
            type={'email'}
            id="email"
            required
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.label_wripper}>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          className={styles.textarea}
          name="message"
          value={state.message}
          id="message"
          onChange={handleChange}
        />
      </div>
      <button className={styles.button} type="submit" htmlFor="contactForm">
        SEND
      </button>
    </form>
  );
};

export default ContactForm;

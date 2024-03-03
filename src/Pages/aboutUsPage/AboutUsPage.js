import React from 'react'
import styles from './styles.module.scss'

const AboutUs = () => {
  return (
    <div className={styles.about_us}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.discription}>
          NARS furniture is a small family business that was founded in 2017. Our commitment to innovation in
          production is the key to the best quality product. We are passionate about making furniture.
          We have implemented many projects developed in collaboration with our in-house designers and
          architects in the private and commercial sector.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
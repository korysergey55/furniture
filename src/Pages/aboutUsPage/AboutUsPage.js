import React from 'react';
import styles from './styles.module.scss';

const AboutUs = () => {
  return (
    <div className={styles.about_us}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.discription}>
          Vitaly furniture is a small family business that was founded in 2017. Our commitment to innovation in
          production is the key to the best quality product. We have implemented many projects developed in
          collaboration with our in-house designers and architects. We are a bespoke furniture & joinery company, that
          prides ourselves on providing only the very best quality products and service to our clients. From design to
          installation we take care of everything ensuring impeccable quality for both product and service. Services
          Provided 3D design and interior design Free standing and fitted furniture. First, second and final fix
          joinery.
          <br />
          Areas Served Cheshire, Manchester mainly but also nationwide in the private and commercial sector.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

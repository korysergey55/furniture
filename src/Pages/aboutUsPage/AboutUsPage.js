import React from 'react';
import { useNavigate } from 'react-router';
import { pathes } from '../../utiles/pathes/pathes';

import FeaturesList from '../../Components/featuresList/FeaturesList';
import Services from '../../Components/services/Services';
import BookConsultation from '../../Components/bookConsultation/BookConsultation';

import styles from './styles.module.scss';
import iamgeOvner from '../../sourses/images/aboutUs/ovnerImage.jpg';

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.about_us}>
      <div className={styles.hero} />
      <div className={styles.container}>
        <div className={styles.contentWripper}>
          <div className={styles.wripper}>
            <h2 className={styles.title}>About Us</h2>
            <p className={styles.discription}>
              Vitaly furniture is a small family business that was founded in 2017. Our commitment
              to innovation in production is the key to the best quality product. We have
              implemented many projects developed in collaboration with our in-house designers and
              architects.
              <br />
              <br />
              We are a bespoke furniture & joinery company, that prides ourselves on providing only
              the very best quality products and service to our clients. From design to installation
              we take care of everything ensuring impeccable quality for both product and service.
              Services Provided 3D design and interior design Free standing and fitted furniture.
              <br />
              <br />
              First, second and final fix joinery. Areas Served Cheshire, Manchester mainly but also
              nationwide in the private and commercial sector.
            </p>
            <p className={styles.link} onClick={() => navigate(pathes.contact)}>
              Get A Quote &#x2192;
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={iamgeOvner} alt="High quality installations" />
          </div>
        </div>
        <FeaturesList />
        <Services />
        <BookConsultation />
      </div>
    </div>
  );
};

export default AboutUs;

import React from 'react';
import { useNavigate } from 'react-router';
import { pathes } from '../../utiles/pathes/pathes';

import styles from './styles.module.scss';

import iamge from '../../sourses/images/products/bespoke/bespoke-image-1.jpg';
import iamge2 from '../../sourses/images/products/cabinets/cabinets-image-2.jpg';
import iamge3 from '../../sourses/images/products/kitchen/kitchen-image-2.jpg';
import iamge4 from '../../sourses/images/products/wardrobes/wardrobes-image-4.jpg';

const FeaturesList = () => {
  const navigate = useNavigate();
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <div className={styles.imageContainer}>
          <img src={iamge} alt="xperienced furniture designers" className={styles.image} />
        </div>
        <div className={styles.wripper}>
          <h3 className={styles.title}>Experienced furniture designers</h3>
          <p className={styles.discription}>
            With over 8 years of industry experience and a wealth of knowledge and expertise, we are
            fully qualified to deliver stunning bespoke designs no matter how big or small the
            project is. So, if you’re looking for experienced furniture designers to help you
            optimise your interior design, get in touch. Our designs are tailored to help you make
            the most of your space.
          </p>
          <p className={styles.link} onClick={() => navigate(pathes.contact)}>
            Get A Quote &#x2192;
          </p>
        </div>
      </li>

      <li className={styles.item}>
        <div className={styles.wripper}>
          <h3 className={styles.title}>High quality installations</h3>
          <p className={styles.discription}>
            From concept to completion, you will benefit from our in-depth knowledge and specialist
            skills. Once you arrive at a design you are happy with, we will ensure that it is fitted
            and finished to the highest standards. We are committed to your satisfaction, going
            above and beyond at every step in the design and installation process to make sure your
            new furniture meets both your practical needs and your personal tastes.
          </p>
          <p className={styles.link} onClick={() => navigate(pathes.contact)}>
            Get A Quote &#x2192;
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={iamge2} alt="High quality installations" className={styles.image} />
        </div>
      </li>

      <li className={styles.item}>
        <div className={styles.imageContainer}>
          <img src={iamge4} alt="Bedroom Solutions" className={styles.image} />
        </div>
        <div className={styles.wripper}>
          <h3 className={styles.title}>Bedroom Solutions</h3>
          <p className={styles.discription}>
            The perfect bedroom should be a relaxing sanctuary, somewhere to escape the hustle and
            bustle of everyday life. With the number one cause of stress in the home being mess,
            great storage is often the number one solution to improve your bedroom. At Vitaly
            furniture, we are a WHICH? Trusted Trader and have over 8 years bespoke designing and
            fitting a variety of made-to-measure, best quality bedroom furniture to suit even the
            most demanding of bedroom shapes. Maximizing your space and taking advantage of all
            usable areas is our specialty. As a result our customers gain an average of 25% more
            storage space, delivering great value for money.
          </p>
          <p className={styles.link} onClick={() => navigate(pathes.contact)}>
            Get A Quote &#x2192;
          </p>
        </div>
      </li>

      <li className={styles.item}>
        <div className={styles.wripper}>
          <h3 className={styles.title}>Bespoke Fitted Kitchens</h3>
          <p className={styles.discription}>
            The kitchen is the heart of home and shouldn’t just be a place to cook. It should be a
            fully useable and inviting space where your whole family can meet and enjoy spending
            time. A kitchen that’s fully prepared for your lifestyle and that of your family. We are
            a WHICH? Trusted Trader and fully understand the variety of challenges a kitchen can
            face, with awkward corners, space limitations, kitchen appliances demands and more. At
            Vitaly furniture, we have over 8 years designing stunning bespoke fitted kitchens in
            Berkshire, Hampshire, Surrey and surrounding local areas.
          </p>
          <p className={styles.link} onClick={() => navigate(pathes.contact)}>
            Get A Quote &#x2192;
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={iamge3} alt="Bespoke Fitted Kitchens" className={styles.image} />
        </div>
      </li>
    </ul>
  );
};

export default FeaturesList;

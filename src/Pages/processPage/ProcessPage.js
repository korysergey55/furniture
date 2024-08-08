import React from 'react';
import BookConsultation from '../../Components/bookConsultation/BookConsultation';

import styles from './styles.module.scss';
import developmentImage from '../../sourses/images/process/development-image.jpg';
import developmentImage2x from '../../sourses/images/process/development-image@2x.webp';
import productionImage from '../../sourses/images/process/production-image.jpg';
import productionImage2x from '../../sourses/images/process/production-image@2x.webp';
import instaletionImage from '../../sourses/images/process/instaletion-image.jpg';
import instaletionImage2x from '../../sourses/images/process/instaletion-image@2x.webp';

const ProcessPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our cooperation with clients consists of three main stages</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.image_wripper}>
            <img
              className={styles.image}
              srcSet={`${developmentImage2x} 2x`}
              src={developmentImage}
              alt="development"
            />
          </div>
          <div className={styles.text_wripper}>
            <h3 className={styles.subtitle}>DEVELOPMENT</h3>
            <p className={styles.text}>
              Each project begins with a discussion with the client and we listen carefully to their
              ideas, wishes and dreams. Before proceeding to the technical part: taking detailed
              measurements,design and calculation of the costs. Once the client approved the final
              version, we move on to the implementation stage.
            </p>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.image_wripper}>
            <img
              className={styles.image}
              srcSet={`${productionImage2x} 2x`}
              src={productionImage}
              alt="production"
            />
          </div>
          <div className={styles.text_wripper}>
            <h3 className={styles.subtitle}>PRODUCTION</h3>
            <p className={styles.text}>
              After receiving the deposit, our professional team begins to bring the ideas to life.
              All stages of furniture making takes place In our manufacturing facility in Cheadle.
              From the first precise cut of the chosen material to the finishing touches. As we
              control and oversee every stage of the manufacturing process we guarantees top quality
              furniture.
            </p>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.image_wripper}>
            <img
              className={styles.image}
              srcSet={`${instaletionImage2x} 2x`}
              src={instaletionImage}
              alt="instaletion"
            />
          </div>
          <div className={styles.text_wripper}>
            <h3 className={styles.subtitle}>INSTALLATION</h3>
            <p className={styles.text}>
              We prepare meticulously for the final stage of the project. The furniture is delivered
              and assembled with the uttermost care by our experienced staff. It is a real joy to
              see the clients dreams come true.
            </p>
          </div>
        </li>
      </ul>
      <BookConsultation />
    </div>
  );
};

export default ProcessPage;

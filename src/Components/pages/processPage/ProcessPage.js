import React from 'react'
import styles from './styles.module.scss'
import developmentImage from '../../../sourses/images/process/development.jpg'
import productionImage from '../../../sourses/images/process/production.webp'
import instaletionImage from '../../../sourses/images/process/instaletion.jpg'

const ProcessPage = () => {
  return (
    <div className={styles.processPage}>
      <div className={styles.container}>
        <p className={styles.description}>Our cooperation with clients consists of three main stages</p>
        <div className={styles.wripper}>
          <h3 className={styles.title}>DEVELOPMENT</h3>
          <div className={styles.imageWripper}>
            <img className={styles.image} src={developmentImage} alt='production' />
            <p className={styles.text}>
              Each project begins with a discussion with the client and we listen carefully to their ideas, wishes and      dreams. Before proceeding to the technical part: taking detailed measurements, design and calculation of the costs. Once the client approved the final version, we move on to the implementation stage.
            </p>
          </div>
        </div>
        <div className={styles.wripper}>
          <h3 className={styles.title}>PRODUCTION</h3>
          <div className={styles.imageWripper}>
            <img className={styles.image} src={productionImage} alt='development' />
            <p className={styles.text}>
              After receiving the deposit, our professional team begins to bring the ideas to life.
              All stages of furniture making takes place In our manufacturing facility in Cheadle.
              From the first precise cut of the chosen material to the finishing touches. As we control and oversee every stage of the manufacturing process we guarantees top quality furniture.
            </p>
          </div>
        </div>
        <div className={styles.wripper}>
          <h3 className={styles.title}>INSTALLATION</h3>
          <div className={styles.imageWripper}>
            <img className={styles.image} src={instaletionImage} alt='instaletion' />
            <p className={styles.text}>We prepare meticulously for the final stage of the project. The furniture is delivered and assembled with the uttermost care by our experienced staff. It is a real joy to see the clients dreams come true.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessPage;
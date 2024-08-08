import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import styles from './styles.module.scss';
import notFoundImg from '../../sourses/images/404/404.jpg';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.wripper}>
        <img className={styles.img} src={notFoundImg} alt="notFoundImg" />
        <div className={styles.rigthSide}>
          <h2 className={styles.title}>404</h2>
          <p className={styles.text}>
            The link you're trying to access is probably broken, or the page has been removed.
          </p>
          <button type="button" className={styles.buttonBackHome} onClick={() => navigate('/home')}>
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

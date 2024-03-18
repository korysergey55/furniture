import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import styles from './styles.module.scss'

const SharedLayout = () => {
  return (
    <div className={styles.shared_layout_container}>
      <Outlet />
      <Footer />
    </div>
  );
};
export default SharedLayout
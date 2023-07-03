import styles from './small-button.module.scss';
import { NavLink } from 'react-router-dom';

const SmallButton = () => {
  return (
    <div className={styles.logInButton}>
        <NavLink to="/login" className={styles.link}>
          Log in
        </NavLink>
    </div>
  );
};

export default SmallButton;

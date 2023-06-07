import styles from './small-button.module.scss';
import { NavLink } from 'react-router-dom';

const SmallButton = () => {
  return (
    <div className={styles.logInButton}>
      <NavLink to="/login">
        <a className={styles.link} href="/login">
          Log in
        </a>
      </NavLink>
    </div>
  );
};

export default SmallButton;

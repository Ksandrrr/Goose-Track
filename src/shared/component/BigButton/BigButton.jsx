import styles from './button.module.scss';
import { NavLink } from 'react-router-dom';
import { LuLogOut } from 'react-icons/lu';

const Button = () => {
  return (
    <NavLink to="/calendar">
      <button type="submit" className={styles.btn}>
        <p className={styles.textBtn}>Sign Up</p>
        <LuLogOut className={styles.icon} />
      </button>
    </NavLink>
  );
};

export default Button;
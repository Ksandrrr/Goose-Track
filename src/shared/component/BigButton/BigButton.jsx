import styles from './button.module.scss';

import { LuLogOut } from 'react-icons/lu';

const Button = () => {
  return (
      <button type="submit" className={styles.btn}>
        <p className={styles.textBtn}>Sign Up</p>
        <LuLogOut className={styles.icon} />
      </button>
  );
};

export default Button;

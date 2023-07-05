import styles from './ProfileForm.module.scss'
// import { NavLink } from 'react-router-dom';


const Button = () => {
  return (

      <button type="submit" className={styles.btn}>
        <p className={styles.textBtn}>Save changes</p>
      </button>

  );
};

export default Button;
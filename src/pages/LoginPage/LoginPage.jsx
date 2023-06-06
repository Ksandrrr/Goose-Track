import styles from './LoginPage.module.scss';
import { LuLogOut } from 'react-icons/lu';
// import Logo from '../../img/SignIn/Group.png';

export const Login = () => {
  return (
    <div className={styles.container}>
        {/* <img className={styles.img} src={Logo} alt="logoGoos" /> */}
      <div className={styles.form}>
        <h2 className={styles.text}>Log in</h2>
        <form className={styles.formInput}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter email"
          />
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter password"
          />
        </form>
        <button type="submit" className={styles.btn}>
          <p className={styles.textBtn}>Log in</p>
          <LuLogOut className={styles.icon} />
        </button>
      </div>
      <div className={styles.logInButton}>
        <a className={styles.link} href="/login">
          Sign Up
        </a>
      </div>
    </div>
  );
};

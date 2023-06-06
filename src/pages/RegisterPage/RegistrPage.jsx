import styles from './RegistrPage.module.scss';
import { LuLogOut } from 'react-icons/lu';

export const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2 className={styles.text}>Sign Up</h2>
        <form className={styles.formInput}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
          />

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
            <p className={styles.textBtn}>Sign Up</p>
            <LuLogOut className={styles.icon} />
          </button>
      </div>
      <div className={styles.logInButton}>
        <a className={styles.link} href="/login">
          Log in
        </a>
      </div>
    </div>
  );
};

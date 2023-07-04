import styles from './LoginPage.module.scss';
import { LuLogOut } from 'react-icons/lu';
import Logo from '../../img/SignIn/elements1.png'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { useState } from 'react';

 const Login = () => {
  const [email, setEmail] = useState()
   const [password, setPassword] = useState()
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(login({email: email, password: password}))
  }
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button type="submit" className={styles.btn} onClick={handleSubmit}>
          <p className={styles.textBtn}>Log in</p>
          <LuLogOut className={styles.icon} />
        </button>
      </div>

      <img src={Logo} alt="Logo" className={styles.right} />
       <div className={styles.logInButton}>
        <NavLink to="/registr" className={styles.link}> 
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};
export default Login
import styles from './LoginPage.module.scss';
import LoginForm from 'components/LoginForm/LoginForm';
import Logo from '../../img/SignIn/elements1.png'
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

export const Login = () => {

  const dispatch = useDispatch();

  const onRegister = (data) => {
    dispatch(register(data))
  }


  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2 className={styles.text}>Log in</h2>
      <LoginForm onSubmit={onRegister}/>
      </div>
      <img src={Logo} alt="Logo" className={styles.right} />
       <NavLink to="/registr"><div className={styles.logInButton}>
        <a className={styles.link} href="/login">
          Sign Up
        </a>
      </div></NavLink>
    </div>
  );
};

import styles from './RegistrPage.module.scss';

import AuthForm from 'components/AuthForm/AuthForm';
import SmallButton from 'shared/component/SmallButton/SmallButton';
import Logo from '../../img/SignIn/elements.png'

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';


export const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = (data) => {
    dispatch(register(data))
  }


  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2 className={styles.text}>Sign Up</h2>
        <AuthForm onSubmit={onRegister}/>
      </div>
      {/* <div className={styles.img}>
        <img src={Logo} alt="Logo" className={styles.left} />
      </div> */}
       <img src={Logo} alt="Logo" className={styles.left} />
      <SmallButton />
    </div>
  );
};

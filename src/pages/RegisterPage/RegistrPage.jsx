import styles from './RegistrPage.module.scss';

import AuthForm from 'components/AuthForm/AuthForm';
import SmallButton from 'shared/component/SmallButton/SmallButton';
import Logo from '../../img/SignIn/elements.png'
import { register } from '../../redux/auth/auth-operations';
import { getAuth } from '../../redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import {Loader} from "../../components/Loader/Loader"
const RegisterPage = () => {
  const { loading } = useSelector(getAuth);
 
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
       <img src={Logo} alt="Logo" className={styles.left} />
      <SmallButton />
      {loading && <Loader/>}
    </div>
  );
};
export default RegisterPage
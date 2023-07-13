import useForm from 'shared/hooks/useForm';
// import initialState from './initialState';

import styles from './ProfileForm.module.scss';
import { useSelector } from 'react-redux';
import {ProfileField} from 'shared/ProfileField/ProfileField';
import fields from './fields';
import Button from './button';
import { getUser } from "../../redux/auth/auth-selectors"
export const ProfileForm = ({ onSubmit }) => {
  const user = useSelector(getUser)


const initialState = {
  name: user.name !== null ? user.name : "",
  birthday: user.birthday !== null ? user.birthday : "",
  email: user.email!== null ?  user.email : "",
  phone: user.phone!== null ?  user.phone : "",
  skype: user.skype!== null ?  user.skype : "",
};
  const { state, handleChange, handleSubmit } = useForm({
  initialState,
  onSubmit,
  });
const { name , birthday, phone, skype, email } = state;
 
 
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <ProfileField value={name} onChange={handleChange} {...fields.name} />
      <ProfileField value={birthday} onChange={handleChange} {...fields.birthday}/>
      <ProfileField value={email} onChange={handleChange} {...fields.email} />
      <ProfileField value={phone} onChange={handleChange} {...fields.phone} />
      <ProfileField value={skype} onChange={handleChange} {...fields.skype} />
        <Button />
    </form>
  );
};

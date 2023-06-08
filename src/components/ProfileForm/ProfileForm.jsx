import useForm from 'shared/hooks/useForm';
import initialState from './initialState';

import styles from './profile-from.module.scss';

import ProfileField from 'shared/ProfileField/ProfileField';
import fields from './fields';
import Button from './ButtonLogin/Button';

const ProfileForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, birthday, phone, skype, email } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <ProfileField value={name} onChange={handleChange} {...fields.name} />
      <ProfileField
        value={birthday}
        onChange={handleChange}
        {...fields.birthday}
      />
      <ProfileField value={email} onChange={handleChange} {...fields.email} />
      <ProfileField value={phone} onChange={handleChange} {...fields.phone} />
      <ProfileField value={skype} onChange={handleChange} {...fields.skype} />
        <Button />
    </form>
  );
};

export default ProfileForm;

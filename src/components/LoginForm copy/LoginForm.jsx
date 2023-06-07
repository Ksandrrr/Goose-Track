import useForm from 'shared/hooks/useForm';
import initialState from './initialState';


import TextField from 'shared/TextField/TextField';
import fields from './fields';
import Button from './ButtonLogin/Button';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password} = state;

  return (
    <form onSubmit={handleSubmit}>
        <TextField value={email} onChange={handleChange} {...fields.email}/>
        <TextField value={password} onChange={handleChange} {...fields.password}/>
        <Button />

    </form>
  );
};

export default LoginForm;

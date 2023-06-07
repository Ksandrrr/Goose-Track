import useForm from 'shared/hooks/useForm';
import initialState from './initialState';


import TextField from 'shared/TextField/TextField';
import fields from './fields';
import Button from 'shared/component/BigButton/BigButton';

const AuthForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const {name, email, password} = state;

  return (
    <form onSubmit={handleSubmit}>
        <TextField value={name} onChange={handleChange} {...fields.name}/>
        <TextField value={email} onChange={handleChange} {...fields.email}/>
        <TextField value={password} onChange={handleChange} {...fields.password}/>
        <Button />

    </form>
  );
};

export default AuthForm;

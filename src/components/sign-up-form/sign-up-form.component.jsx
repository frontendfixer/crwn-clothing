import { useState } from 'react';
import FormInput from './../form-input/form-input.component';
import Button from './../button/button.component';
import {
  createUserEmailAndPassword,
  createUserDocumentFromAuth,
} from './../../utils/firebase/firebase.utils.js';
import './sign-up-form.styles.scss';

const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;

  const handelSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('password do not match');
      return;
    }

    try {
      const { user } = await createUserEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      console.log({ error });
      if (error.code === 'auth/email-already-in-use') {
        alert('User already exist');
      }
    }
  };

  const handelChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const resetFormField = () => {
    setFormField(defaultFormField);
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label='Display Name'
          inputOptions={{
            type: 'text',
            onChange: handelChange,
            name: 'displayName',
            value: displayName,
            required: true,
          }}
        />

        <FormInput
          label='Email'
          inputOptions={{
            type: 'email',
            onChange: handelChange,
            name: 'email',
            value: email,
            required: true,
          }}
        />

        <FormInput
          label='Password'
          inputOptions={{
            type: 'password',
            onChange: handelChange,
            name: 'password',
            value: password,
            required: true,
          }}
        />

        <FormInput
          label='Confirm Password'
          inputOptions={{
            type: 'password',
            onChange: handelChange,
            name: 'confirmPassword',
            value: confirmPassword,
            required: true,
          }}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;

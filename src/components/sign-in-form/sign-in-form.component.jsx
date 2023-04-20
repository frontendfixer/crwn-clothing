import { useState } from 'react';

import FormInput from './../form-input/form-input.component';
import Button from './../button/button.component';
import {
  signInWithGooglePopup,
  signInUserEmailAndPassword,
  createUserDocumentFromAuth,
} from './../../utils/firebase/firebase.utils.js';
import './sign-in-form.styles.scss';

const defaultFormField = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const resetFormField = () => {
    setFormField(defaultFormField);
  };

  const handelSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInUserEmailAndPassword(email, password);
      console.log(response);
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password');
          break;
        case 'auth/user-not-found':
          alert('No User associated with this email');
          break;
        default:
          console.log({ error });
          break;
      }
    }
  };

  const handelChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handelSubmit}>
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
        <div className='button-group'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

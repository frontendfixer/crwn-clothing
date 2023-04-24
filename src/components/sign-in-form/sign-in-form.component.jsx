import { useState } from 'react';

import './sign-in-form.styles.scss';
import {
  signInWithGooglePopup,
  signInUserEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => await signInWithGooglePopup();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handelSubmit = async event => {
    event.preventDefault();

    try {
      const { user } = await signInUserEmailAndPassword(email, password);

      resetFormFields();
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

  const handelChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: 'email',
            onChange: handelChange,
            name: 'email',
            value: email,
            required: true,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: 'password',
            onChange: handelChange,
            name: 'password',
            value: password,
            required: true,
          }}
        />
        <div className="button-group">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

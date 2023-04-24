import './authentication.styles.scss';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

/* eslint arrow-body-style: ["error", "never"] */
const Authentication = () => (
  <div className="authentication-container">
    <SignInForm />
    <SignUpForm />
  </div>
);

export default Authentication;

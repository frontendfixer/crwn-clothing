import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from './../../utils/firebase/firebase.utils.js';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>In SIGN-IN page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </>
  );
};

export default SignIn;

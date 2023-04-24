import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAVEsqUlV3FBF_QCiXdgqMD_3LiTPjWh9U',
  authDomain: 'crwn-clothing-36402.firebaseapp.com',
  projectId: 'crwn-clothing-36402',
  storageBucket: 'crwn-clothing-36402.appspot.com',
  messagingSenderId: '42415152706',
  appId: '1:42415152706:web:888ba680a47e4c2520d7db',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocref = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocref);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await setDoc(userDocref, {
        displayName,
        email,
        createDate,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocref;
};

export const createUserEmailAndPassword = async (email, password) => {
  if (!email || !password) return {};

  const val = await createUserWithEmailAndPassword(auth, email, password);
  return val;
};

export const signInUserEmailAndPassword = async (email, password) => {
  if (!email || !password) return {};

  const val = await signInWithEmailAndPassword(auth, email, password);
  return val;
};

// export default {
//   createUserEmailAndPassword,
//   createUserDocumentFromAuth,
//   signInUserEmailAndPassword,
// };

// eslint-disable-next-line no-return-await
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = callback => onAuthStateChanged(auth, callback);

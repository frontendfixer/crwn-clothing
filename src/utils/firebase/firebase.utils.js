/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
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

export const auth = getAuth(firebaseApp);
auth.useDeviceLanguage();

// ============ Google Authentications
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
//-------------------------------------------

// ================= Firestore Setup
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocref = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocref);

  if (!userSnapshot.exists()) {
    const { displayName, email, uid } = userAuth;
    const createDate = new Date();

    try {
      await setDoc(userDocref, {
        displayName,
        email,
        createDate,
        uid,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocref;
};

// ========== Emain & Password Authentications
export const createUserEmailAndPassword = async (email, password) => {
  if (!email || !password) return {};

  const val = await createUserWithEmailAndPassword(auth, email, password);
  console.log(val);
  return val;
};

export const signInUserEmailAndPassword = async (email, password) => {
  if (!email || !password) return {};

  const val = await signInWithEmailAndPassword(auth, email, password);
  console.log(val);
  return val;
};
// ---------------------------------------

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);

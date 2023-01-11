import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'clone-ee440.firebaseapp.com',
  projectId: 'clone-ee440',
  storageBucket: 'clone-ee440.appspot.com',
  messagingSenderId: '1095654694026',
  appId: '1:1095654694026:web:63339c1c0fdf2fab09a173',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;

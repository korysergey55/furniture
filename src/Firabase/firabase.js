import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'vitaly-furniture.firebaseapp.com',
  databaseURL: 'https://vitaly-furniture-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'vitaly-furniture',
  storageBucket: 'vitaly-furniture.appspot.com',
  messagingSenderId: '46098105184',
  appId: '1:46098105184:web:241aa05c7ee597a6711405',
  measurementId: 'G-2KSLJG8EDF',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const db = getFirestore(app);
export { db };

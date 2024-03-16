import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-jNjtGR87RAh2Jn1Rz6UzhFiGrKyWDNc",
  authDomain: "vitaly-furniture.firebaseapp.com",
  databaseURL: "https://vitaly-furniture-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vitaly-furniture",
  storageBucket: "vitaly-furniture.appspot.com",
  messagingSenderId: "46098105184",
  appId: "1:46098105184:web:241aa05c7ee597a6711405",
  measurementId: "G-2KSLJG8EDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = app.auth()
auth.languageCode = 'en'
const db = app.firestore()
const googleProvider = new firebase.auth.GoogleAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider()
const analytics = getAnalytics(app);
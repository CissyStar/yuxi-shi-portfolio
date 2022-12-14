// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfahE7uR9VD9vrHY0KpDyWhz3hKjYc4Fs",
  authDomain: "yuxi-shi-portfolio.firebaseapp.com",
  projectId: "yuxi-shi-portfolio",
  storageBucket: "yuxi-shi-portfolio.appspot.com",
  messagingSenderId: "104398484654",
  appId: "1:104398484654:web:7185c1b2105468c4eb293f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export const storage = getStorage(app);
export const dbRef = collection(db, "portfolio");

export const registerNewUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // console.log(user);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });

export const signInWithEmail = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // console.log(user);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });

export const signOutUser = () =>
  signOut(auth)
    .then(() => {
      // console.log(`Signed out`);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });

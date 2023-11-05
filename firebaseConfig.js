// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp, getApp } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfvvGgu3k1o5TdirjHRYQF2tMEMwhGN1Q",
  authDomain: "equipcheck-8c601.firebaseapp.com",
  projectId: "equipcheck-8c601",
  storageBucket: "equipcheck-8c601.appspot.com",
  messagingSenderId: "940376096185",
  appId: "1:940376096185:web:fa65ef496306aaa0c84a68",
  measurementId: "G-MR70V8BBY2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const auth = getAuth(firebaseApp);
const firebase = getFirestore(firebaseApp);

export { firebaseApp, firebase, firebaseAuth, auth };

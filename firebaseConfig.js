// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvwFK97bwPEwmqcn8GckDLShxs0fiXEK0",
  authDomain: "testing-33bc7.firebaseapp.com",
  databaseURL: "https://testing-33bc7-default-rtdb.firebaseio.com",
  projectId: "testing-33bc7",
  storageBucket: "testing-33bc7.appspot.com",
  messagingSenderId: "302367076842",
  appId: "1:302367076842:web:462c7ee76a60d4c2100293",
  measurementId: "G-E6S89ZB7XT",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const firebase = getFirestore(firebaseApp);
export { firebaseApp };
export { firebase };

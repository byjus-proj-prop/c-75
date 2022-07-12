// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCj-UO5E5wRINSortofoifQ5hymhvAaRM",
  authDomain: "c-75-10002.firebaseapp.com",
  projectId: "c-75-10002",
  storageBucket: "c-75-10002.appspot.com",
  messagingSenderId: "389638108367",
  appId: "1:389638108367:web:3d1744ead4b41eaf7c73ba"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

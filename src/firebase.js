// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyClTFX77Ho49q566JpM0Sk7LBHtgHd916E",
    authDomain: "slack-crypto-clone.firebaseapp.com",
    projectId: "slack-crypto-clone",
    storageBucket: "slack-crypto-clone.appspot.com",
    messagingSenderId: "1021198844881",
    appId: "1:1021198844881:web:f3fa1045e6b30709bc56f0",
    measurementId: "G-2SDPNLN2M0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
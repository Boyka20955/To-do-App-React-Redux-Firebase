import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDI99lOqIjDCs1A3Zq4W-Ey_nN067WxhXc",
  authDomain: "to-do-app-d474e.firebaseapp.com",
  projectId: "to-do-app-d474e",
  storageBucket: "to-do-app-d474e.firebasestorage.app",
  messagingSenderId: "849874683464",
  appId: "1:849874683464:web:410f486f75f6e479087a7d"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;

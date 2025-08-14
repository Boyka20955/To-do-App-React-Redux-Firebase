import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "Use your firebase ApiKey",
  authDomain: "Use your firebase Auth Domain",
  projectId: "Use your firebase Project ID",
  storageBucket: "Use your firebase Storage Bucket",
  messagingSenderId: "Use your firebase Messaging Sender ID",
  appId: "Use your firebase App ID",
  measurementId: "Use your firebase Measurement ID",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;

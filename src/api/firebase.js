import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQ4G70gBHIyKp4mqzsMlprzyw_sxKeE6g",
  authDomain: "kh-mini-project-241125.firebaseapp.com",
  projectId: "kh-mini-project-241125",
  storageBucket: "kh-mini-project-241125.firebasestorage.app",
  messagingSenderId: "967231158508",
  appId: "1:967231158508:web:933c749f0c4b55f6434dc9",
  measurementId: "G-41WWXV3P9X",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();

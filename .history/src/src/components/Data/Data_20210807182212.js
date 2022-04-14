
import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyB-Br7RYmN5QUphb6XUbi3FBljmpa7aXZg",
  authDomain: "sirjohnsonsocks-4fc06.firebaseapp.com",
  projectId: "sirjohnsonsocks-4fc06",
  storageBucket: "sirjohnsonsocks-4fc06.appspot.com",
  messagingSenderId: "177823698359",
  appId: "1:177823698359:web:a1032003e9bc16e84bec32"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;


import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {

  apiKey: "AIzaSyD1OTjdlxVNICfP-gQ9v4TMHFV2OEamD0A",

  authDomain: "sirjohnsonsocks.firebaseapp.com",

  projectId: "sirjohnsonsocks",

  storageBucket: "sirjohnsonsocks.appspot.com",

  messagingSenderId: "17156929417",

  appId: "1:17156929417:web:1d429b270bfd233ceed358"

};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;

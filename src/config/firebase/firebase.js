import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyAFwZT6eFP80i42nOM9dmj2sR3I4ZvbriU",
    authDomain: "studentportal-df2db.firebaseapp.com",
    databaseURL: "https://studentportal-df2db.firebaseio.com",
    projectId: "studentportal-df2db",
    storageBucket: "",
    messagingSenderId: "625595899441",
    appId: "1:625595899441:web:fc2319680545519091bf10",
    measurementId: "G-LZRQEMMXFL"
  };
  // Initialize Firebase
 let Firebase = firebase.initializeApp(firebaseConfig);
 export {Firebase}
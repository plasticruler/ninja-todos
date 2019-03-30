/*empty*/
import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCDqgUDUJvDUtBYGXUe0iIShAN3_9iPWAU",
  authDomain: "ninja-todo-7cb02.firebaseapp.com",
  databaseURL: "https://ninja-todo-7cb02.firebaseio.com",
  projectId: "ninja-todo-7cb02",
  storageBucket: "ninja-todo-7cb02.appspot.com",
  messagingSenderId: "663497361948"
};
firebase.initializeApp(config);

export const fb = firebase.firestore();
export const fa = firebase.auth();
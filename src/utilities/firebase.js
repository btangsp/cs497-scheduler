import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { useObjectVal } from 'react-firebase-hooks/database';
import { useAuthState } from 'react-firebase-hooks/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAfwlvHr9HecH7jX4mOKJlfIA1nEXhntcw",
  authDomain: "cs497-scheduler-btangsp.firebaseapp.com",
  databaseURL: "https://cs497-scheduler-btangsp-default-rtdb.firebaseio.com",
  projectId: "cs497-scheduler-btangsp",
  storageBucket: "cs497-scheduler-btangsp.appspot.com",
  messagingSenderId: "562736187268",
  appId: "1:562736187268:web:d723ecd5fb0bdce25f7fd1",
  measurementId: "G-3C9SMN2S95"
};

firebase.initializeApp(firebaseConfig);

export const useData = (path, transform) => (
  useObjectVal(firebase.database().ref(path), { transform })
);

export const useUserState = () => useAuthState(firebase.auth());

export const setData = (path, value) => (
  firebase.database().ref(path).set(value)
);

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

export const signOut = () => firebase.auth().signOut();
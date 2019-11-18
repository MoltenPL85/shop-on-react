import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAg-HWuSPzLvKHG1QDVpeInuVYX5VDLmJ4',
  authDomain: 'crwn-shop-db-868d6.firebaseapp.com',
  databaseURL: 'https://crwn-shop-db-868d6.firebaseio.com',
  projectId: 'crwn-shop-db-868d6',
  storageBucket: 'crwn-shop-db-868d6.appspot.com',
  messagingSenderId: '398913377351',
  appId: '1:398913377351:web:d040538569ce0cc9d0cd62'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

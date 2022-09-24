import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB__Mc74oGqc8p-Nb3Hej-PKvENuMVyjY0",
    authDomain: "eshop-fe3c1.firebaseapp.com",
    projectId: "eshop-fe3c1",
    storageBucket: "eshop-fe3c1.appspot.com",
    messagingSenderId: "159454390793",
    appId: "1:159454390793:web:e27783d1804f1a8a8be6d8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
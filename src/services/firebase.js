import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCmcdIvyQ6Wkb6lfpN9xWTQ3c3HmlCGlrg",
    authDomain: "bau-bau.firebaseapp.com",
    projectId: "bau-bau",
    storageBucket: "bau-bau.appspot.com",
    messagingSenderId: "428496798401",
    appId: "1:428496798401:web:58ab26ef7c0c62d4544a40"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
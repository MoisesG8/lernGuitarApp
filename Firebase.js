import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmDfvq7PIyUaS-4qKYeoRjBV6HWUpR6wE",
    authDomain: "learnguitarapp-7e65b.firebaseapp.com",
    projectId: "learnguitarapp-7e65b",
    storageBucket: "learnguitarapp-7e65b.appspot.com",
    messagingSenderId: "1089450524082",
    appId: "1:1089450524082:web:9e4eac5f9b1671b5c378ab"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

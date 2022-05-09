// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIQr3Br6OPcXsUtVxAA07v--7MjODdIcw",
    authDomain: "tv-star-management.firebaseapp.com",
    projectId: "tv-star-management",
    storageBucket: "tv-star-management.appspot.com",
    messagingSenderId: "116432894674",
    appId: "1:116432894674:web:c34201e7fc36618ca4cb0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
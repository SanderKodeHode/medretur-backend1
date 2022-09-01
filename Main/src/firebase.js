// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDM0L3kew01X23etUb4yNt2EOOy7N1-xY",
  authDomain: "medretur-5431b.firebaseapp.com",
  databaseURL: "https://medretur-5431b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "medretur-5431b",
  storageBucket: "medretur-5431b.appspot.com",
  messagingSenderId: "404900185225",
  appId: "1:404900185225:web:b761baa617a82b67fcb258",
  measurementId: "G-1T4WS4VNQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
/* import { log } from "console"; */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV98k2Y79OAx6fVQUZrilykaj7r4R0kS8",
  authDomain: "e-mercado-fc.firebaseapp.com",
  projectId: "e-mercado-fc",
  storageBucket: "e-mercado-fc.appspot.com",
  messagingSenderId: "473749367843",
  appId: "1:473749367843:web:21e3acd1636df6cce75596"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBX0VgTu0aJb1yyEA-fVJXo6Jkkt1f0Zqo",
//   authDomain: "doctors-portal-79783.firebaseapp.com",
//   projectId: "doctors-portal-79783",
//   storageBucket: "doctors-portal-79783.appspot.com",
//   messagingSenderId: "237326385669",
//   appId: "1:237326385669:web:7d2fb68350e1934062926c",
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


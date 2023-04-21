// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHnOUHrbuBUiiugb-zApEnb8y6-xyy3ZY",
  authDomain: "quiz-cbc83.firebaseapp.com",
  databaseURL: "https://quiz-cbc83-default-rtdb.firebaseio.com",
  projectId: "quiz-cbc83",
  storageBucket: "quiz-cbc83.appspot.com",
  messagingSenderId: "218397970765",
  appId: "1:218397970765:web:d874af1647d68bdaffe704"
};



// Initialize Firebase
const app= initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default getFirestore();
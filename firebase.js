import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDras6XMnky2hpXNDWFL-N_yQdTPalelyw",
  authDomain: "facedetectionapp-9e52d.firebaseapp.com",
  projectId: "facedetectionapp-9e52d",
  storageBucket: "facedetectionapp-9e52d.appspot.com",
  messagingSenderId: "1003909983331",
  appId: "1:1003909983331:web:12c994f92bce6b1f041c56",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db, app };

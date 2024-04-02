import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCZNqmLGM_c4a77w65Zj2PC3wHObix9WB0",
  authDomain: "project-bfc5f.firebaseapp.com",
  projectId: "project-bfc5f",
  storageBucket: "project-bfc5f.appspot.com",
  messagingSenderId: "678617196072",
  appId: "1:678617196072:web:dd7c1d3a0082a119ccf71d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword  , signInWithEmailAndPassword };
export default db;
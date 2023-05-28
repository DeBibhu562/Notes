import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCtJQllK7Q6EPSF1MnBJ3faArIq8EWap4Q",
  authDomain: "my-note-f2d2a.firebaseapp.com",
  projectId: "my-note-f2d2a",
  storageBucket: "my-note-f2d2a.appspot.com",
  messagingSenderId: "52209606489",
  appId: "1:52209606489:web:e0b5c296186fbbf1917648"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
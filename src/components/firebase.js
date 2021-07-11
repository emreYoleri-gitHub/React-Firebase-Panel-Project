import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCmVOZnMe3BkUjHn0Va6o3KEBF7_o6HagU",
  authDomain: "databaseproject-1fbf6.firebaseapp.com",
  projectId: "databaseproject-1fbf6",
  storageBucket: "databaseproject-1fbf6.appspot.com",
  messagingSenderId: "202980580851",
  appId: "1:202980580851:web:bde67e2f1ca5aaba0f4686",
  measurementId: "G-E694YP3J9E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();


export default db;
export { auth };

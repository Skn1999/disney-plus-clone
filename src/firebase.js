import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB-TAHNQt--wN-f0IoqZ9z9Wy7Dy_KrN7E",
  authDomain: "disney-plus-clone-d3ef6.firebaseapp.com",
  projectId: "disney-plus-clone-d3ef6",
  storageBucket: "disney-plus-clone-d3ef6.appspot.com",
  messagingSenderId: "501392099048",
  appId: "1:501392099048:web:cae80942d139a40c502b5d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { storage, db, auth, provider };

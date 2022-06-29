import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8a7rGKC5mcBnnA145vEHCgOSvizpooeM",
  authDomain: "de-bilbao.firebaseapp.com",
  projectId: "de-bilbao",
  storageBucket: "de-bilbao.appspot.com",
  messagingSenderId: "29633869978",
  appId: "1:29633869978:web:b577bdd53d1fed93b20723",
};

const app = firebase.initializeApp(firebaseConfig);

export const fb = firebase;
export const st = app.storage();
export const db = app.firestore();

export default app;

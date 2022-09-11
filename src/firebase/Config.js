import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGj9ZAGvWMEjEheB3S4nbgvYl5CScesKQ",
  authDomain: "zawn-d7f63.firebaseapp.com",
  projectId: "zawn-d7f63",
  storageBucket: "zawn-d7f63.appspot.com",
  messagingSenderId: "897391096622",
  appId: "1:897391096622:web:15da70cae49ea3f61980bf",
  measurementId: "G-CMM6P2H65N",
};

export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const shippingCollectionRef = collection(db, "Shipping");
export const orderHistoryRef = collection(db, 'Orders');
export const userCollectionRef = collection(db, 'Users');

function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

function createWithEmail(email, password, first, last) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function signInWithEmail(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

export const user = auth.currentUser;

function accountSignOut() {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      alert("An error has occurred");
    });
}

export { signInWithGoogle, accountSignOut, createWithEmail, signInWithEmail };

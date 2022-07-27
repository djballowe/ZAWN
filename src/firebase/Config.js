import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGj9ZAGvWMEjEheB3S4nbgvYl5CScesKQ",
  authDomain: "zawn-d7f63.firebaseapp.com",
  projectId: "zawn-d7f63",
  storageBucket: "zawn-d7f63.appspot.com",
  messagingSenderId: "897391096622",
  appId: "1:897391096622:web:15da70cae49ea3f61980bf",
  measurementId: "G-CMM6P2H65N",
};

function signInWithGoogle() {
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider(app);

  const auth = getAuth(app);

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      alert(user.displayName);
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

export default signInWithGoogle;

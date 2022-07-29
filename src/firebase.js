// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6EqBJsEnOtGOf-_6TboDGBdzRmyt109k",
  authDomain: "react-firebase-auth-3302a.firebaseapp.com",
  projectId: "react-firebase-auth-3302a",
  storageBucket: "react-firebase-auth-3302a.appspot.com",
  messagingSenderId: "693290235906",
  appId: "1:693290235906:web:407bfef3b3891b4f3c4f1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const signUp = async (email, password) => {
  const { user } = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return user;
  // try {
  //   const { user } = await createUserWithEmailAndPassword(
  //     auth,
  //     email,
  //     password
  //   );
  //   return user;
  // } catch (error) {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log("error code: ", errorCode);
  //   console.log("error message: ", errorMessage);
  // }

  // .then .catch example
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });
};

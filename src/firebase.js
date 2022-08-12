// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const logIn = async (email, password) => {
  
    const {user} =await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    return user;
 

};
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

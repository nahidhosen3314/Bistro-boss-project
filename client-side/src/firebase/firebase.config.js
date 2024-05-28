// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


// ----------------------------------------------
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAaOSWEeCaUvpjcxomXbefhsqCeYDj-9Us",
//   authDomain: "bistro-boss-79582.firebaseapp.com",
//   projectId: "bistro-boss-79582",
//   storageBucket: "bistro-boss-79582.appspot.com",
//   messagingSenderId: "256146206740",
//   appId: "1:256146206740:web:02e8fd97bf17064f89b701"
// };


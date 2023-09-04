// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqCT5cgZ2Sfe9iz8JBIIFk8lysxC0pes0",
  authDomain: "chef-recipe-firebase.firebaseapp.com",
  projectId: "chef-recipe-firebase",
  storageBucket: "chef-recipe-firebase.appspot.com",
  messagingSenderId: "96143274143",
  appId: "1:96143274143:web:a889bca3da2a28560f72aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
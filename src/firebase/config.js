import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgjWuAMl3SAfYNejvDjOV5OljM4v70HWg",
  authDomain: "zillow-5525a.firebaseapp.com",
  projectId: "zillow-5525a",
  storageBucket: "zillow-5525a.appspot.com",
  messagingSenderId: "777682059333",
  appId: "1:777682059333:web:a5ef3b566d5172ea9be32c",
  measurementId: "G-B3H9DX6DJV"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth (app) 
const google = new firebaseConfig.auth.GoogleAuthProvider
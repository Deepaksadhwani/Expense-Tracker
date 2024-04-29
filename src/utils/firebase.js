// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDediS6jBO6fl0QM9KuAFgJD8OTtG4g-fg",
  authDomain: "deepak-expense-tracker.firebaseapp.com",
  projectId: "deepak-expense-tracker",
  storageBucket: "deepak-expense-tracker.appspot.com",
  messagingSenderId: "287041386040",
  appId: "1:287041386040:web:2f9ad6a7362097c1e0d8cd",
  measurementId: "G-8LL049YVD9",
  databaseURL: "https://deepak-expense-tracker-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

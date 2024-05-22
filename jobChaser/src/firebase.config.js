// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvlRPGaY3EwqsdtRzD5684M3dxLQ39UKM",
  authDomain: "online-job-portal-1d9a7.firebaseapp.com",
  projectId: "online-job-portal-1d9a7",
  storageBucket: "online-job-portal-1d9a7.appspot.com",
  messagingSenderId: "37546597767",
  appId: "1:37546597767:web:185ba767e9bf44711c0722",
  measurementId: "G-NSQECN3W0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
const db = getFirestore();


export {db};

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebaseConfig from "./firebase.config";

const firebaseInitializeApp = () => {
  initializeApp(firebaseConfig);
};

export default firebaseInitializeApp;
// Initialize Firebase

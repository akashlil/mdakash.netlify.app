import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebaseConfig from "./firebase.config";

const firebaseInitializeApp = () => {
  const app = initializeApp(firebaseConfig);
  if (typeof window != "undefined") {
    if ("measurementId" in firebaseConfig) {
      const analytics = getAnalytics(app);
    }
  }
};

export default firebaseInitializeApp;
// Initialize Firebase

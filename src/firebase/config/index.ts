import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDVp3mTg4U7ur2TNlwsuunRstniNXlEEKI",
    authDomain: "video-sharing-353c3.firebaseapp.com",
    projectId: "video-sharing-353c3",
    storageBucket: "video-sharing-353c3",
    messagingSenderId: "video-sharing-353c3.appspot.com",
    appId: "380616949787",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCznHjepBTc6-Gus2YvAChKvJVFMdF-F3w",
    authDomain: "auth-dev-34b1d.firebaseapp.com",
    projectId: "auth-dev-34b1d",
    storageBucket: "auth-dev-34b1d.appspot.com",
    messagingSenderId: "751967215443",
    appId: "1:751967215443:web:16f1bfb80bac284d58cba6",
    measurementId: "G-CNB02BVV72"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);

export default app;
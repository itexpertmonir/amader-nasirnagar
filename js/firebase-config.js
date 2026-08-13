import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBR8Qngy3FFQqj645f2SqPx1fztytsrJUQ",
  authDomain: "amader-nasirnagar.firebaseapp.com",
  projectId: "amader-nasirnagar",
  storageBucket: "amader-nasirnagar.firebasestorage.app",
  messagingSenderId: "1023271207346",
  appId: "1:1023271207346:web:e4fb45646f75bb9e1124ab"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

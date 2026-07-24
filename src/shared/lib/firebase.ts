import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0mor-OAxdrja150xTIuALEFDDFxe1hAk",
  authDomain: "insighttube-ai-c47a8.firebaseapp.com",
  projectId: "insighttube-ai-c47a8",
  storageBucket: "insighttube-ai-c47a8.firebasestorage.app",
  messagingSenderId: "753918633961",
  appId: "1:753918633961:web:43be4d30e90cc9d9924d78",
  measurementId: "G-JFYJ93ZWEL",
};

const app =
  getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApp();

export const auth = getAuth(app);
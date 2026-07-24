"use client";

import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import { auth } from "@/shared/lib/firebase";

const googleProvider = new GoogleAuthProvider();

// Google Sign In
export async function signInWithGoogle() {
  return await signInWithPopup(auth, googleProvider);
}

// Register
export async function registerUser(
  email: string,
  password: string
) {
  return await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
}

// Login
export async function loginUser(
  email: string,
  password: string
) {
  return await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
}

// Forgot Password
export async function resetPassword(email: string) {
  return await sendPasswordResetEmail(auth, email);
}

// Logout
export async function logoutUser() {
  return await signOut(auth);
}
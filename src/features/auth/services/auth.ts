"use client";

import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "@/shared/lib/firebase";

const googleProvider = new GoogleAuthProvider();

// Google Sign In
export async function signInWithGoogle() {
  return await signInWithPopup(auth, googleProvider);
}

// Register
export async function registerUser(
  name: string,
  email: string,
  password: string
) {
  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  await updateProfile(userCredential.user, {
    displayName: name,
  });

  return userCredential;
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
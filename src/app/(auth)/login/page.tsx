"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  signInWithGoogle,
  loginUser,
} from "@/features/auth/services/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [googleError, setGoogleError] = useState("");

  const [loading, setLoading] = useState(false);

  // ---------------- GOOGLE LOGIN ----------------

  const handleGoogleLogin = async () => {
    setGoogleError("");

    try {
      await signInWithGoogle();

      router.push("/dashboard");
    } catch (error: any) {
      console.log(error);

      if (
        error.code === "auth/popup-closed-by-user" ||
        error.code === "auth/cancelled-popup-request"
      ) {
        setGoogleError("Google sign in was cancelled.");
        return;
      }

      setGoogleError("Unable to sign in with Google.");
    }
  };

  // ---------------- EMAIL LOGIN ----------------

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Email is required.");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Password is required.");
      return;
    }

    try {
      setLoading(true);

      await loginUser(email, password);

      router.push("/dashboard");
    } catch (error: any) {
      switch (error.code) {
        case "auth/invalid-email":
          setEmailError("Invalid email address.");
          break;

        case "auth/user-not-found":
          setEmailError("Account not found.");
          break;

        case "auth/wrong-password":
          setPasswordError("Incorrect password.");
          break;

        case "auth/invalid-credential":
          setPasswordError("Incorrect email or password.");
          break;

        default:
          setPasswordError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 py-10 relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#7c3aed22,transparent_40%),radial-gradient(circle_at_bottom,#8b5cf655,transparent_45%)]" />

      <div className="relative z-10 w-full max-w-6xl rounded-3xl border border-white/10 bg-[#0b0b15] overflow-hidden shadow-2xl grid md:grid-cols-2">

        {/* LEFT */}

        <div className="relative p-14 bg-gradient-to-br from-[#151027] to-[#0c0b16] flex flex-col justify-center">

          <div className="absolute -bottom-24 left-0 w-full h-64 bg-purple-600 blur-[120px] opacity-40 rounded-full"></div>

          <div className="flex items-center gap-4 mb-10">

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-700 flex items-center justify-center">

              <Sparkles className="text-white" size={24} />

            </div>

            <h2 className="text-3xl font-bold text-white">
              Insight
              <span className="text-purple-400">
                Tube AI
              </span>
            </h2>

          </div>

          <h1 className="text-4xl font-bold text-white leading-tight">
            Turn YouTube videos into
            <span className="text-purple-400">
              {" "}
              powerful knowledge.
            </span>
          </h1>

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                ✨
              </div>

              AI Summarization
            </div>

            <div className="flex items-center gap-4 text-gray-300">

              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                📈
              </div>

              Save Time & Learn Faster

            </div>

            <div className="flex items-center gap-4 text-gray-300">

              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                🔖
              </div>

              Organize & Revisit Easily

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="p-14">

          <h2 className="text-3xl font-bold text-purple-300">
            Welcome back
          </h2>

          <p className="text-gray-400 mt-2">
            Login to continue your learning journey.
          </p>

          {/* GOOGLE */}

          <button
            onClick={handleGoogleLogin}
            className="mt-10 w-full h-12 rounded-xl border border-white/10 bg-[#1b1b2a] text-white hover:bg-[#25253a] transition"
          >
            Continue with Google
          </button>

          {googleError && (
            <p className="text-red-500 text-sm mt-3">
              {googleError}
            </p>
          )}

          <div className="flex items-center my-8">

            <div className="flex-1 h-px bg-white/10"></div>

            <span className="px-4 text-gray-500 text-sm">
              or
            </span>

            <div className="flex-1 h-px bg-white/10"></div>

          </div>
                    {/* EMAIL */}

          <div className="space-y-6">

            {/* Email */}

            <div>

              <div className="relative">

                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  placeholder="Enter your email"
                  className={`w-full h-12 rounded-xl bg-[#1b1b2a] pl-12 text-white outline-none border ${
                    emailError
                      ? "border-red-500"
                      : "border-white/10 focus:border-purple-500"
                  }`}
                />

              </div>

              {emailError && (
                <p className="text-red-500 text-sm mt-2">
                  {emailError}
                </p>
              )}

            </div>

            {/* Password */}

            <div>

              <div className="relative">

                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                  placeholder="Enter your password"
                  className={`w-full h-12 rounded-xl bg-[#1b1b2a] pl-12 text-white outline-none border ${
                    passwordError
                      ? "border-red-500"
                      : "border-white/10 focus:border-purple-500"
                  }`}
                />

              </div>

              {passwordError && (
                <p className="text-red-500 text-sm mt-2">
                  {passwordError}
                </p>
              )}

            </div>

          </div>

          {/* Forgot Password */}

          <div className="flex justify-end mt-3">

            <Link
              href="/forgot-password"
              className="text-sm text-purple-400 hover:text-purple-300"
            >
              Forgot password?
            </Link>

          </div>

          {/* Login */}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="mt-8 w-full h-12 rounded-xl bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold hover:scale-[1.02] transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login →"}
          </button>

          {/* Register */}

          <p className="mt-8 text-center text-gray-400">

            Don't have an account?

            <Link
              href="/register"
              className="text-purple-400 ml-2 hover:underline"
            >
              Sign Up
            </Link>

          </p>

        </div>

      </div>

    </main>
  );
}
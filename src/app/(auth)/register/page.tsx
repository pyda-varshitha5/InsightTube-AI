"use client";

import Link from "next/link";
import {
  Sparkles,
  Mail,
  Lock,
  User,
  ArrowRight,
} from "lucide-react";

import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  registerUser,
  signInWithGoogle,
} from "@/features/auth/services/auth";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] =
    useState("");

  const [loading, setLoading] = useState(false);

  const handleGoogleSignup = async () => {
    try {
      setLoading(true);

      await signInWithGoogle();

      router.push("/dashboard");
    } catch (error: any) {
      if (error.code !== "auth/cancelled-popup-request") {
        setEmailError("Google Sign Up failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (!name.trim()) {
      setNameError("Full name is required.");
      return;
    }

    if (!email.trim()) {
      setEmailError("Email is required.");
      return;
    }

    if (!password) {
      setPasswordError("Password is required.");
      return;
    }

    if (password.length < 6) {
      setPasswordError(
        "Password must contain at least 6 characters."
      );
      return;
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError(
        "Passwords do not match."
      );
      return;
    }

    try {
      setLoading(true);

      await registerUser(name, email, password);
      router.push("/dashboard");
    } catch (error: any) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setEmailError("Email already exists.");
          break;

        case "auth/invalid-email":
          setEmailError("Invalid email address.");
          break;

        case "auth/weak-password":
          setPasswordError(
            "Password should be at least 6 characters."
          );
          break;

        default:
          setEmailError("Unable to create account.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6 py-10">

      {/* Background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-violet-700/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-fuchsia-600/20 blur-[150px]" />

      <div className="relative z-10 grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d14] shadow-[0_0_60px_rgba(139,92,246,.15)] md:grid-cols-2">

        {/* LEFT */}

        <div className="relative flex flex-col justify-center bg-gradient-to-br from-[#141224] to-[#0b0b12] p-12">

          <div className="mb-10 flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500">

              <Sparkles className="text-white" />

            </div>

            <h1 className="text-3xl font-bold text-white">
              InsightTube
              <span className="text-violet-400"> AI</span>
            </h1>

          </div>

          <h2 className="text-4xl font-bold leading-tight text-white">
            Create your
            <br />
            AI Learning Account.
          </h2>

          <p className="mt-6 leading-8 text-zinc-400">
            Join thousands of learners using AI to summarize YouTube videos,
            organize knowledge and save hours of learning.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4 text-zinc-300">
              ✨ AI Summaries
            </div>

            <div className="flex items-center gap-4 text-zinc-300">
              📚 Smart Learning
            </div>

            <div className="flex items-center gap-4 text-zinc-300">
              📈 Analytics Dashboard
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="p-12">

          <h2 className="text-3xl font-bold text-white">
            Create Account
          </h2>

          <p className="mt-2 text-zinc-400">
            Create your InsightTube AI account.
          </p>

          <button
            onClick={handleGoogleSignup}
            className="mt-8 flex h-12 w-full items-center justify-center rounded-xl border border-white/10 bg-[#171722] text-white transition hover:border-violet-500 hover:bg-violet-500/10"
          >
            Continue with Google
          </button>

          <div className="my-8 flex items-center">

            <div className="h-px flex-1 bg-white/10" />

            <span className="mx-4 text-sm text-zinc-500">
              OR
            </span>

            <div className="h-px flex-1 bg-white/10" />

          </div>

          {/* Full Name */}

          <div className="relative mb-2">

            <User
              className="absolute left-4 top-4 text-zinc-500"
              size={18}
            />

            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError("");
              }}
              placeholder="Full Name"
              className="h-12 w-full rounded-xl border border-white/10 bg-[#171722] pl-12 text-white outline-none focus:border-violet-500"
            />

          </div>

          {nameError && (
            <p className="mb-4 text-sm text-red-500">
              {nameError}
            </p>
          )}
                    {/* Email */}

          <div className="relative mb-2">

            <Mail
              className="absolute left-4 top-4 text-zinc-500"
              size={18}
            />

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              placeholder="Email Address"
              className="h-12 w-full rounded-xl border border-white/10 bg-[#171722] pl-12 text-white outline-none focus:border-violet-500"
            />

          </div>

          {emailError && (
            <p className="mb-4 text-sm text-red-500">
              {emailError}
            </p>
          )}

          {/* Password */}

          <div className="relative mb-2">

            <Lock
              className="absolute left-4 top-4 text-zinc-500"
              size={18}
            />

            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              placeholder="Password"
              className="h-12 w-full rounded-xl border border-white/10 bg-[#171722] pl-12 text-white outline-none focus:border-violet-500"
            />

          </div>

          {passwordError && (
            <p className="mb-4 text-sm text-red-500">
              {passwordError}
            </p>
          )}

          {/* Confirm Password */}

          <div className="relative mb-2">

            <Lock
              className="absolute left-4 top-4 text-zinc-500"
              size={18}
            />

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmPasswordError("");
              }}
              placeholder="Confirm Password"
              className="h-12 w-full rounded-xl border border-white/10 bg-[#171722] pl-12 text-white outline-none focus:border-violet-500"
            />

          </div>

          {confirmPasswordError && (
            <p className="mb-4 text-sm text-red-500">
              {confirmPasswordError}
            </p>
          )}

          <button
            onClick={handleRegister}
            disabled={loading}
            className="group mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-600 text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}

            {!loading && (
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            )}
          </button>

          <p className="mt-8 text-center text-zinc-400">

            Already have an account?

            <Link
              href="/login"
              className="ml-2 text-violet-400 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </main>
  );
}
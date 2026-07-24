"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, ArrowRight, Sparkles } from "lucide-react";

import { resetPassword } from "@/features/auth/services/auth";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    setEmailError("");
    setSuccess("");

    if (!email.trim()) {
      setEmailError("Please enter your email.");
      return;
    }

    try {
      setLoading(true);

      await resetPassword(email);

      setSuccess(
        "Password reset email sent successfully. Please check your inbox."
      );
    } catch (error: any) {
      switch (error.code) {
        case "auth/user-not-found":
          setEmailError("No account found with this email.");
          break;

        case "auth/invalid-email":
          setEmailError("Invalid email address.");
          break;

        default:
          setEmailError("Unable to send reset email.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6">

      {/* Background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-violet-700/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-fuchsia-600/20 blur-[150px]" />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-[#0d0d14] p-10 shadow-[0_0_60px_rgba(139,92,246,.15)]">

        <div className="mb-8 flex justify-center">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500">

            <Sparkles className="text-white" />

          </div>

        </div>

        <h1 className="text-center text-3xl font-bold text-white">
          Forgot Password
        </h1>

        <p className="mt-3 text-center text-zinc-400">
          Enter your registered email address and we'll send you a password reset link.
        </p>

        <div className="relative mt-8">

          <Mail
            className="absolute left-4 top-4 text-zinc-500"
            size={18}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
              setSuccess("");
            }}
            className="h-12 w-full rounded-xl border border-white/10 bg-[#171722] pl-12 text-white outline-none focus:border-violet-500"
          />

        </div>

        {emailError && (
          <p className="mt-2 text-sm text-red-500">
            {emailError}
          </p>
        )}

        {success && (
          <p className="mt-2 text-sm text-green-400">
            {success}
          </p>
        )}

        <button
          onClick={handleResetPassword}
          disabled={loading}
          className="group mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-600 text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Reset Link"}

          {!loading && (
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          )}
        </button>

        <button
          onClick={() => router.push("/login")}
          className="mt-4 h-12 w-full rounded-xl border border-white/10 bg-[#171722] text-white transition hover:border-violet-500"
        >
          Back to Login
        </button>

        <p className="mt-8 text-center text-zinc-400">
          Don't have an account?

          <Link
            href="/register"
            className="ml-2 text-violet-400 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>

    </main>
  );
}
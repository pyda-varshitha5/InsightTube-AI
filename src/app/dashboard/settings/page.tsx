"use client";

import { Settings, User, Mail, LogOut } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#0B0B12] text-white p-8">

      {/* Header */}
      <div className="mb-10 flex items-center gap-4">
        <div className="rounded-xl bg-violet-600/20 p-4">
          <Settings className="h-8 w-8 text-violet-400" />
        </div>

        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="mt-1 text-gray-400">
            Manage your account and application preferences.
          </p>
        </div>
      </div>

      {/* Account Information */}
      <div className="rounded-2xl border border-violet-500/10 bg-[#151520] p-8 shadow-lg">

        <h2 className="mb-6 text-2xl font-semibold">
          Account Information
        </h2>

        <div className="space-y-6">

          <div className="flex items-center gap-4 rounded-xl bg-[#1A1A28] p-4">

            <div className="rounded-lg bg-violet-600/20 p-3">
              <User className="h-6 w-6 text-violet-400" />
            </div>

            <div>
              <p className="text-sm text-gray-400">Name</p>
              <p className="text-lg font-medium">
                Your Name
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4 rounded-xl bg-[#1A1A28] p-4">

            <div className="rounded-lg bg-violet-600/20 p-3">
              <Mail className="h-6 w-6 text-violet-400" />
            </div>

            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-lg font-medium">
                your@email.com
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Account Actions */}
      <div className="mt-8 rounded-2xl border border-violet-500/10 bg-[#151520] p-8 shadow-lg">

        <h2 className="mb-6 text-2xl font-semibold">
          Account
        </h2>

        <p className="mb-6 text-gray-400">
          Sign out from your InsightTube AI account.
        </p>

        <button
          className="flex items-center gap-3 rounded-xl bg-red-600 px-6 py-3 font-medium transition-all duration-300 hover:bg-red-700"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>

      </div>

      {/* Future Features */}
      <div className="mt-8 rounded-2xl border border-violet-500/10 bg-[#151520] p-8 shadow-lg">

        <h2 className="mb-6 text-2xl font-semibold">
          Coming Soon
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          <div className="rounded-xl bg-[#1A1A28] p-5">
            <h3 className="font-semibold text-violet-400">
              Change Password
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Securely update your password.
            </p>
          </div>

          <div className="rounded-xl bg-[#1A1A28] p-5">
            <h3 className="font-semibold text-violet-400">
              Notifications
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Manage email and app notifications.
            </p>
          </div>

          <div className="rounded-xl bg-[#1A1A28] p-5">
            <h3 className="font-semibold text-violet-400">
              Appearance
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Choose between Dark, Light and System themes.
            </p>
          </div>

          <div className="rounded-xl bg-[#1A1A28] p-5">
            <h3 className="font-semibold text-violet-400">
              Export Data
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Download your search history and saved summaries.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
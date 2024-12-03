"use client";

import { SignIn, SignOutButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const user = useUser();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        {user ? (
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome, {user.user?.fullName}
            </h1>
            <p className="text-gray-600 mb-6">
              We're glad to have you back. Explore your dashboard to get
              started.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              <SignOutButton />
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-xl font-semibold text-gray-800 mb-4">
              Please Sign In
            </h1>
            <p className="text-gray-600 mb-6">
              Access your account to explore amazing features.
            </p>
            <SignIn />
          </div>
        )}
      </div>
    </div>
  );
}

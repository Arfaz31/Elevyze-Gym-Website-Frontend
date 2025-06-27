"use client";

import React from "react";
import Link from "next/link";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 p-4">
      <div className="max-w-6xl w-full rounded-3xl shadow-2xl overflow-hidden border border-purple-800/20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left column - Gym Visual */}
          <div className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-blue-700 to-purple-800 text-white p-8 md:p-12 flex flex-col justify-between">
            <div className="absolute inset-0 overflow-hidden opacity-15">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 400 400"
              >
                <defs>
                  <pattern
                    id="fitness-pattern"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    {/* Dumbbell pattern */}
                    <g transform="translate(30,30)">
                      <rect
                        x="-20"
                        y="-2"
                        width="40"
                        height="4"
                        fill="currentColor"
                        opacity="0.4"
                      />
                      <circle
                        cx="-15"
                        cy="0"
                        r="6"
                        fill="currentColor"
                        opacity="0.6"
                      />
                      <circle
                        cx="15"
                        cy="0"
                        r="6"
                        fill="currentColor"
                        opacity="0.6"
                      />
                    </g>
                    {/* Gym equipment pattern */}
                    <circle
                      cx="15"
                      cy="15"
                      r="3"
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <circle
                      cx="45"
                      cy="45"
                      r="3"
                      fill="currentColor"
                      opacity="0.3"
                    />
                  </pattern>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="url(#fitness-pattern)"
                />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Elevyze Logo */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mr-4 shadow-xl">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-white">
                    <path
                      fill="currentColor"
                      d="M12 2C13.1 2 14 2.9 14 4V8C15.1 8 16 8.9 16 10V14C16 15.1 15.1 16 14 16H10C8.9 16 8 15.1 8 14V10C8 8.9 8.9 8 10 8V4C10 2.9 10.9 2 12 2M12 4V8H12V4M10 10V14H12V10H10M14 10V14V10Z"
                    />
                    <rect
                      x="6"
                      y="18"
                      width="12"
                      height="3"
                      rx="1.5"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl font-bold">ELEVYZE</h1>
                  <p className="text-purple-200 text-sm">Fitness Training</p>
                </div>
              </div>

              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-300 my-6"></div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Your Ultimate Fitness Journey
              </h2>
              <p className="text-purple-200 mb-6 leading-relaxed">
                Transform your body, elevate your mind. Professional training
                programs designed to help you reach peak performance and achieve
                your fitness goals.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-purple-200 text-sm">
                    Personal Training Programs
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-purple-200 text-sm">
                    Nutrition Guidance
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-purple-200 text-sm">
                    Progress Tracking
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-6">
              <Link href="/programs" passHref>
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg transform hover:scale-105">
                  Explore Programs
                </button>
              </Link>
            </div>

            {/* Motivational Quote */}
            <div className="relative z-10 mt-8">
              <p className="text-sm text-purple-300 italic leading-relaxed">
                &quot;Strength doesn&apos;t come from what you can do. It comes
                from overcoming the things you once thought you
                couldn&apos;t.&quot; <br />
                <span className="font-medium">— Elevyze Philosophy</span>
              </p>
            </div>
          </div>

          {/* Right column - Error Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-white relative">
            {/* Error Icon */}
            <div className="w-24 h-24 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse opacity-30"></div>
              <div className="relative z-10 flex items-center justify-center h-full w-full bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.96-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                Training Interrupted
              </h1>
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Something went wrong with your workout session
              </h2>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-700 font-medium mb-2">Error Details:</p>
                <p className="text-red-600 text-sm mb-2">{error.message}</p>
                {error.digest && (
                  <p className="text-xs text-red-500 font-mono">
                    Session ID: {error.digest}
                  </p>
                )}
              </div>

              <p className="text-gray-600 mb-8">
                Don&apos;t let this setback stop your progress. Every champion
                faces obstacles - it&apos;s how we recover that defines our
                strength.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => reset()}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center justify-center space-x-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span>Restart Training Session</span>
              </button>

              <Link href="/" passHref>
                <button className="w-full px-8 py-4 bg-white border-2 border-orange-300 text-gray-700 font-semibold rounded-xl hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 flex items-center justify-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span>Return to Training Hub</span>
                </button>
              </Link>

              <Link href="/support" passHref>
                <button className="w-full px-8 py-4 bg-white border-2 border-gray-300 text-gray-600 font-medium rounded-xl hover:border-purple-400 hover:text-purple-600 transition-all duration-300 flex items-center justify-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Contact Support Team</span>
                </button>
              </Link>
            </div>

            {/* Support Info */}
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500">
                Need immediate help? Reach our trainers at{" "}
                <a
                  href="mailto:support@elevyze.com"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  support@elevyze.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

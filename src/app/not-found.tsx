import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-50 to-orange-50 p-4">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-100">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left column - Gym Visual */}
          <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 text-white p-8 flex flex-col justify-between">
            <div className="absolute inset-0 opacity-15">
              {/* Fitness pattern */}
              <svg
                viewBox="0 0 400 400"
                className="absolute top-0 left-0 h-full w-full"
              >
                <defs>
                  <pattern
                    id="fitness-pattern"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                    patternUnits="userSpaceOnUse"
                  >
                    {/* Dumbbell icon */}
                    <g transform="translate(40,40)">
                      <rect
                        x="-25"
                        y="-3"
                        width="50"
                        height="6"
                        fill="currentColor"
                        opacity="0.4"
                      />
                      <circle
                        cx="-20"
                        cy="0"
                        r="8"
                        fill="currentColor"
                        opacity="0.6"
                      />
                      <circle
                        cx="20"
                        cy="0"
                        r="8"
                        fill="currentColor"
                        opacity="0.6"
                      />
                    </g>
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
              <div className="flex items-center mb-6">
                {/* Elevyze Logo Recreation */}
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
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
                  <h1 className="text-2xl font-bold">ELEVYZE</h1>
                  <p className="text-purple-200 text-sm">Fitness Training</p>
                </div>
              </div>

              <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-100 mb-4">
                404
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-orange-300 my-6"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                Workout Not Found
              </h3>
              <p className="text-purple-200 text-lg mb-8">
                Looks like this exercise routine has gone missing from our gym
                floor.
              </p>
            </div>

            <div className="relative z-10">
              <p className="text-sm text-purple-300 leading-relaxed">
                &quot;The body achieves what the mind believes. Every rep
                counts, every step matters.&quot; <br />
                <span className="italic font-medium">— Elevyze Philosophy</span>
              </p>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center bg-white relative">
            {/* Animated fitness icon */}
            <div className="w-28 h-28 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-orange-100 rounded-full animate-pulse opacity-30"></div>
              <div className="absolute inset-2 bg-purple-100 rounded-full animate-ping opacity-20"></div>
              <div className="relative z-10 flex items-center justify-center h-full w-full bg-gradient-to-br from-purple-500 to-blue-600 rounded-full shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>

            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Lost Your Way to Gains?
            </h4>

            <p className="text-gray-600 text-center mb-8 text-lg leading-relaxed">
              The workout you&apos;re looking for might be resting between sets.
              Let&apos;s get you back on track to crushing your fitness goals!
            </p>

            <div className="flex flex-col gap-4">
              <Link href="/">
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Back to Training Hub</span>
                </button>
              </Link>

              <Link href="/workouts">
                <button className="w-full bg-white border-2 border-orange-300 hover:border-orange-400 hover:bg-orange-50 text-gray-700 hover:text-orange-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3">
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
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                  <span>Explore Workouts</span>
                </button>
              </Link>

              <Link href="/programs">
                <button className="w-full bg-white border-2 border-purple-300 hover:border-purple-400 hover:bg-purple-50 text-gray-700 hover:text-purple-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span>View Training Programs</span>
                </button>
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500">
                Need help? Contact our fitness coaches at{" "}
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

export default NotFoundPage;

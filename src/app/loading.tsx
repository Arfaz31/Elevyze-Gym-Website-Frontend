"use client";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 fixed inset-0 z-50 backdrop-blur-sm flex justify-center items-center overflow-hidden">
      {/* Blurred Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-[200px] md:w-[300px] h-[300px] bg-[rgba(147,51,234,0.3)] blur-[100px] absolute top-[28%] left-[20%] animate-pulse" />
        <div className="w-[200px] md:w-[300px] h-[300px] bg-[rgba(249,115,22,0.3)] blur-[100px] absolute bottom-[10%] right-[20%] animate-pulse [animation-delay:1s]" />
        <div className="w-[150px] md:w-[200px] h-[200px] bg-[rgba(59,130,246,0.2)] blur-[80px] absolute top-[60%] left-[60%] animate-pulse [animation-delay:2s]" />
      </div>

      {/* Main Content */}
      <div className="z-50 relative flex flex-col items-center gap-8">
        {/* Advanced Spinner with Elevyze branding */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className="w-24 h-24 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500 animate-spin [animation-duration:2s] p-1">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900"></div>
          </div>

          {/* Middle ring */}
          <div className="absolute inset-2 w-16 h-16 rounded-full border-3 border-orange-400 border-t-transparent animate-spin [animation-duration:1.5s] [animation-direction:reverse]" />

          {/* Inner core with logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white animate-pulse"
              >
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
          </div>

          {/* Pulsing outer glow */}
          <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-orange-500/20 animate-ping [animation-duration:3s]"></div>
        </div>

        {/* Loading Text with Elevyze branding */}
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent mb-3">
            ELEVYZE
          </h2>
          <p className="text-purple-300 text-sm font-medium mb-2">
            Powering up your training experience...
          </p>

          {/* Progress dots */}
          <div className="flex justify-center space-x-2 mt-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
          </div>
        </div>

        {/* Motivational Loading Messages */}
        <div className="text-center max-w-xs">
          <p className="text-xs text-purple-400 italic">
            &quot;Every great workout starts with a single rep&quot;
          </p>
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-orange-500/30 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-4 h-4 bg-purple-500/30 rounded-full animate-float [animation-delay:1s]"></div>
      <div className="absolute top-1/3 right-20 w-8 h-8 bg-blue-500/20 rounded-full animate-float [animation-delay:2s]"></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;

"use client";

import React, { useState, useEffect } from "react";
import { Users, Dumbbell, Award, Zap, Star, TrendingUp } from "lucide-react";

// Import your actual images
import image1 from "@/assets/images/knowus1.jpg";
import image2 from "@/assets/images/knowus2.jpg";
import Image from "next/image";
import Container from "@/components/Shared/Container";

const KnowUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Professional Trainers",
      description: "Certified experts dedicated to your fitness journey",
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-purple-600" />,
      title: "Modern Equipment",
      description: "State-of-the-art fitness technology and machines",
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Body Building Machine",
      description: "Specialized equipment for serious muscle building",
    },
  ];

  const workoutStats = [
    {
      label: "Success Rate",
      value: "98%",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      label: "Active Members",
      value: "5K+",
      icon: <Users className="w-5 h-5" />,
    },
    { label: "Rating", value: "4.9", icon: <Star className="w-5 h-5" /> },
  ];

  const images = [image1, image2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-16 lg:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.05)_0%,transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2" />

      <Container className="relative px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-full">
                WHO WE ARE
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Take Your Health And Body To
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Next Level
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                With over 10 years of experience, we&apos;re committed to
                providing our members with exceptional service and premium
                facilities. Our diverse range of equipment and expert trainers
                ensure you receive top-notch guidance, making your fitness
                journey unforgettable and enjoyable.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs lg:text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-lg hover:shadow-xl">
                TAKE A TOUR
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Optimized Dimensions */}
          <div className="relative">
            {/* Main Visual Container - Reduced Height */}
            <div className="relative h-[400px] lg:h-[450px] rounded-3xl overflow-hidden">
              {/* Image Slideshow Background */}
              <div className="absolute inset-0">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentSlide
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110"
                    }`}
                  >
                    <Image
                      src={img}
                      fill
                      alt={`Gym Training ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Dynamic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-blue-900/50 to-purple-900/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Bottom Stats Panel */}
              <div className="absolute bottom-0 left-0 right-0 z-20">
                <div className="bg-gradient-to-r from-black/80 via-purple-900/70 to-black/80 backdrop-blur-sm p-4 lg:p-6">
                  <div className="grid grid-cols-3 gap-4 lg:gap-6">
                    {workoutStats.map((stat, index) => (
                      <div key={index} className="text-center text-white group">
                        <div className="flex justify-center mb-2 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                          {stat.icon}
                        </div>
                        <div className="text-xl lg:text-2xl font-bold mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs opacity-80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Navigation Dots */}
              <div className="absolute bottom-20 lg:bottom-24 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex gap-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-blue-400 scale-125"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 right-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-300" />
              <div className="absolute top-1/3 right-16 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700" />
              <div className="absolute bottom-1/3 right-12 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-1000" />
            </div>

            {/* Secondary Cards - Reduced Size */}
            <div className="mt-6 relative">
              <div className="grid grid-cols-2 gap-3">
                {/* Workout Intensity Indicator */}
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-4 lg:p-5 rounded-2xl text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10">
                    <Zap className="w-6 h-6 lg:w-7 lg:h-7 mb-2 text-orange-400" />
                    <h4 className="text-sm lg:text-base font-bold mb-1">
                      High Intensity
                    </h4>
                    <p className="text-xs opacity-90">
                      Maximum results with proven methods
                    </p>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-white/10 rounded-full" />
                </div>

                {/* Premium Equipment Highlight */}
                <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 lg:p-5 rounded-2xl text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10">
                    <Award className="w-6 h-6 lg:w-7 lg:h-7 mb-2 text-yellow-300" />
                    <h4 className="text-sm lg:text-base font-bold mb-1">
                      Premium Gear
                    </h4>
                    <p className="text-xs opacity-90">
                      Latest equipment for optimal workouts
                    </p>
                  </div>
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-white/10 rounded-full" />
                </div>
              </div>
            </div>

            {/* Call to Action - Smaller Button */}
            <div className="mt-6 text-center">
              <button className="group bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto">
                Start Your Journey
                <div className="bg-white/20 p-1.5 rounded-full group-hover:rotate-12 transition-transform duration-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default KnowUs;

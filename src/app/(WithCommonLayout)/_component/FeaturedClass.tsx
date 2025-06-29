import React from "react";
import {
  Bike,
  Activity,
  Dumbbell,
  Shield,
  Zap,
  HeartPulse,
} from "lucide-react";
import Container from "@/components/Shared/Container";

const FeaturedClass = () => {
  const classes = [
    {
      icon: <Bike className="w-6 h-6 text-white" />,
      title: "Cycling",
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-white" />,
      title: "Meditation",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Martial Arts",
    },
    {
      icon: <Activity className="w-6 h-6 text-white" />,
      title: "Karate",
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-white" />,
      title: "Power Lifting",
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Workout",
    },
  ];

  const hexagonStyle: React.CSSProperties = {
    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    backgroundColor: "white",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)",
    zIndex: 10,
  };

  const backHexagonStyle: React.CSSProperties = {
    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    backgroundColor: "#d1d5db", // Tailwind gray-300
    opacity: 0.4,
    zIndex: 1,
    top: "8px",
    left: "8px",
  };

  return (
    <section className="py-20 bg-[#f7f4fa] relative">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Our Featured Classes
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Gymat an unknown printer took a galley of type and scrambled make a
            type specimen book.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {classes.map((item, index) => (
            <div
              key={index}
              className="relative group flex justify-center items-center"
            >
              {/* Back hexagon */}
              <div
                className="absolute w-72 h-64"
                style={backHexagonStyle}
              ></div>

              {/* Main hexagon */}
              <div
                className="w-72 h-64 p-6 text-center transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center relative"
                style={hexagonStyle}
              >
                {/* Icon circle */}
                <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mb-4 shadow-md">
                  {item.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  The Best Body Fitness in Town
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Authoritatively disseminate multimedia based
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedClass;

import Container from "../Shared/Container";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Elevyze
              </span>{" "}
              Gym
            </h2>
            <p className="text-gray-400">
              Transform your body, elevate your life. Our state-of-the-art
              facility and expert trainers will help you reach your fitness
              goals.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Classes */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Our Classes
            </h3>
            <ul className="space-y-3">
              {[
                "Functional Fitness",
                "High-Intensity Training",
                "Power Yoga",
                "Strength Conditioning",
                "Cardio Blast",
                "Flexibility & Mobility",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Working Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-400">
                <span>Monday - Friday</span>
                <span>6:00 - 22:00</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Saturday</span>
                <span>8:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sunday</span>
                <span className="text-purple-400">Closed</span>
              </li>
            </ul>
            <div className="mt-6 bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-400">
                *Holiday hours may vary. Check our social media for updates.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Contact Us
            </h3>
            <address className="not-italic space-y-3 text-gray-400">
              <p>
                123 Fitness Avenue
                <br />
                Sports City, SC 10001
              </p>
              <p>
                <a
                  href="tel:+11234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@elevyzegym.com"
                  className="hover:text-white transition-colors"
                >
                  info@elevyzegym.com
                </a>
              </p>
            </address>
            <button className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
              Get Directions
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Elevyze Gym. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

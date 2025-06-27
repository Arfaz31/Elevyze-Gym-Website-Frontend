"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Phone,
  ShoppingCart,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Top Info Bar - Dark */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <div className=" px-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <span>Location: 1050 Anewton Way Irvine, New York</span>
            <span>E-mail: email@example.com</span>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <span>Follow Us On:</span>
            <a href="#" className="hover:text-red-500 transition-colors">
              <Facebook size={14} />
            </a>
            <span className="text-white font-bold">X</span>
            <a href="#" className="hover:text-red-500 transition-colors">
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - White Background */}
      <nav className="bg-white shadow-sm">
        <div className=" px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                {/* Red heart-shaped logo */}
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center relative">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Gymate</h1>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Ultimate Gym Center
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 font-medium transition-colors py-2"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 font-medium transition-colors py-2"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 font-medium transition-colors py-2"
              >
                Pages
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 font-medium transition-colors py-2"
              >
                Class
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 font-medium transition-colors py-2"
              >
                Schedule
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 font-medium transition-colors py-2"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 font-medium transition-colors py-2"
              >
                Shop
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 font-medium transition-colors py-2"
              >
                Contact
              </a>
            </div>

            {/* Right Side - Phone, Cart, Join Button */}
            <div className="flex items-center space-x-6">
              {/* Phone */}
              <div className="hidden md:flex items-center space-x-3 text-gray-700">
                <Phone className="w-6 h-6 text-red-500" />
                <div>
                  <p className="text-xs text-gray-500">Let's Phone:</p>
                  <p className="font-semibold text-lg">+123-(233)-375</p>
                </div>
              </div>

              {/* Shopping Cart */}
              <button className="relative p-2 text-gray-700 hover:text-red-500 transition-colors">
                <ShoppingCart className="w-7 h-7" />
              </button>

              {/* Join Class Button */}
              <button className="hidden md:flex items-center bg-red-500 text-white px-6 py-3 rounded font-bold hover:bg-red-600 transition-colors uppercase tracking-wide">
                <span className="text-xl mr-2">+</span>
                JOIN CLASS NOW
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 text-gray-700 hover:text-red-500 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
              <div className="py-4 space-y-2">
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors"
                >
                  Pages
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors"
                >
                  Class
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors"
                >
                  Schedule
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors"
                >
                  Contact
                </a>

                {/* Mobile Contact Info */}
                <div className="px-4 py-3 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-700 mb-4">
                    <Phone className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-xs text-gray-500">Let's Phone:</p>
                      <p className="font-semibold">+123-(233)-375</p>
                    </div>
                  </div>
                  <button className="w-full bg-red-500 text-white py-3 rounded font-bold hover:bg-red-600 transition-colors uppercase tracking-wide">
                    + JOIN CLASS NOW
                  </button>
                </div>

                {/* Mobile Social Links */}
                <div className="px-4 py-3 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">Follow Us On:</span>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-red-500 transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                    <span className="text-gray-600 hover:text-red-500 transition-colors font-bold">
                      X
                    </span>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-red-500 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

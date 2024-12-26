"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-white font-bold text-xl">hazki</div>

          {/* Links */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Sobre
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Serviços
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contato
            </a>
          </div>

          {/* Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            Home
          </a>
          <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            About
          </a>
          <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            Services
          </a>
          <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            Contact
          </a>
        </div>
      )}
    </motion.nav>
  );
}

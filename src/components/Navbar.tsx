"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-orange-500/30 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-white font-bold text-xl">Hazki</div>

          {/* Links */}
          <div className="hidden md:flex space-x-4">
            <a href="\" className="text-white hover:text-gray-600 transition duration-500">
              Home
            </a>
            <a href="\about" className="text-white hover:text-gray-600 transition duration-500">
              Sobre
            </a>
            <a href="#" className="text-white hover:text-gray-600 transition duration-500">
              Serviços
            </a>
            <a href="#" className="text-white hover:text-gray-600 transition duration-500">
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
        <div className="md:hidden bg-orange-500/70 text-white px-2 pt-2 pb-3 space-y-1 backdrop-blur-md">
          <a
            href="\"
            className="block px-3 py-2 rounded-md hover:bg-orange-300"
          >
            Home
          </a>
          <a
            href="\about"
            className="block px-3 py-2 rounded-md hover:bg-orange-300"
          >
            Sobre
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md hover:bg-orange-300"
          >
            Serviços
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md hover:bg-orange-300"
          >
            Contato
          </a>
        </div>
      )}
    </nav>
  );
}

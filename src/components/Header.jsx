import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar Container */}
      <nav className="flex justify-between items-center bg-white py-4 px-6 shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">VISHWAMBHAR</div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(true)} // Open the menu
          className="text-black hover:text-gray-600 focus:outline-none md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          <li className="hover:text-gray-600 cursor-pointer">Articles</li>
          <li className="hover:text-gray-600 cursor-pointer">Courses</li>
          <li className="hover:text-gray-600 cursor-pointer">
            Spiritual Intelligence
          </li>
        </ul>
      </nav>

      {/* Sliding Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between px-2 py-4 border-b border-gray-200">
          {/* Logo */}

          <div className="text-xl font-bold text-black">VISHWAMBHAR</div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)} // Close the menu
            className="text-black hover:text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul className=" space-y-2 text-black font-medium ">
          <li className="hover:text-gray-600 cursor-pointer hover:bg-gray-100 h-14 px-2 flex  justify-start items-center" >Articles</li>
          <li className="hover:text-gray-600 cursor-pointer  hover:bg-gray-100 h-14 px-2 flex  justify-start items-center">Courses</li>
          <li className="hover:text-gray-600 cursor-pointer  hover:bg-gray-100 h-14 px-2 flex  justify-start items-center">
            Spiritual Intelligence
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)} // Close menu on clicking overlay
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Header;

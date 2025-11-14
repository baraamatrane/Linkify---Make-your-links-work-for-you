"use client";

import React, { useState } from "react";
import Logo from "@/../public/logo.png";
import Image from "next/image";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <header className="w-10/12 h-auto m-9 shadow-xl fixed top-0 z-50 bg-white rounded-full backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12">
          <div className="w-full flex justify-between items-center gap-4 lg:gap-10">
            <div className="flex items-center gap-8">
              <a href="/" className="inline-block">
                <Image
                  src={Logo}
                  alt="logo"
                  width={208}
                  height={80}
                  className="w-36 lg:w-52 h-auto cursor-pointer"
                  priority
                />
              </a>
              {/* Desktop nav - hidden on small screens */}
              <nav className="hidden lg:block">
                <ul className="flex space-x-8 mr-8 font-medium">
                  <li className="cursor-pointer hover:text-blue-500 transition-colors">
                    Features
                  </li>
                  <li className="cursor-pointer hover:text-blue-500 transition-colors">
                    Pricing
                  </li>
                  <li className="cursor-pointer hover:text-blue-500 transition-colors">
                    Testimonials
                  </li>
                </ul>
              </nav>
            </div>

            <div />
            <div className="hidden lg:flex space-x-3">
              <button className="w-full font-semibold cursor-pointer px-6 text-white bg-blue-500 hover:bg-blue-400 transition-colors rounded-full">
                Log In
              </button>
              <button className="w-full bg-transparent text-blue-500 font-semibold cursor-pointer px-4 border border-blue-500 hover:bg-gray-200 transition-colors rounded-full">
                Sign Up
              </button>
            </div>
            {/* Mobile menu button */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="lg:hidden p-2 rounded-lg inline-flex items-center justify-center border border-transparent hover:bg-gray-200 dark:hover:bg-white/10"
            >
              {!open ? (
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
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
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
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
      </header>
      {open && (
        <div className="lg:hidden fixed top-28 left-1/2 transform -translate-x-1/2 w-11/12 max-w-sm z-40">
          <div
            className={`${
              open ? "px-6 pb-6 pt-2 h-full" : "h-0 px-0 pb-0 pt-0"
            } h-full overflow-hidden rounded-b-lg bg-white/95 shadow-md transition-all duration-300 backdrop-blur-sm`}
          >
            <ul className="flex flex-col space-y-4 font-medium">
              <li
                className="cursor-pointer hover:text-blue-500 transition-colors"
                onClick={() => setOpen(false)}
              >
                Features
              </li>
              <li
                className="cursor-pointer hover:text-blue-500 transition-colors"
                onClick={() => setOpen(false)}
              >
                Pricing
              </li>
              <li
                className="cursor-pointer hover:text-blue-500 transition-colors"
                onClick={() => setOpen(false)}
              >
                Testimonials
              </li>
            </ul>

            <div className="mt-4 flex flex-col space-y-3">
              <button className="w-full font-semibold cursor-pointer py-2 px-6 text-white bg-blue-500 hover:bg-blue-400 transition-colors rounded-full">
                Log In
              </button>
              <button className="w-full bg-transparent text-blue-500 font-semibold cursor-pointer py-2 px-4 border border-blue-500 hover:bg-gray-200 transition-colors rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

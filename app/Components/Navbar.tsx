"use client";
import Link from "next/link"; // Import Link from next/link for internal navigation
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

// Define the type for props
type NavbarProps = {
  isScrolled: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`transition-all duration-300 border-b bg-[white] shadow-md ${
        isScrolled ? "fixed top-0 left-0 w-full z-40" : "relative"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Text */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/infinity-logo.png"
              alt="Company Logo"
              width={70} // Adjust size as needed
              height={70}
              className="h-12"
            />
            <div className="flex flex-col text-center">
              <span className="text-lg font-bold text-[black]">
                INFINITY CONSTRUCTION NYC
              </span>
              <span className="text-sm text-[black]">
                Quality is our specialty
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-sm text-black font-medium tracking-wide">
          <Link href="/" className="text-orange-600 hover:text-orange-600 transition-colors duration-200 font-bold">
            HOME
          </Link>
          <Link href="/" className="hover:text-orange-600 transition-colors duration-200 font-bold">
            SERVICES
          </Link>
          <Link href="/" className="hover:text-orange-600 transition-colors duration-200 font-bold">
            PROJECTS
          </Link>
          <Link href="/" className="hover:text-orange-600 transition-colors duration-200 font-bold">
            BLOG
          </Link>
          <Link href="/" className="hover:text-orange-600 transition-colors duration-200 font-bold">
            GALLERY
          </Link>
          <Link href="/" className="hover:text-orange-600 transition-colors duration-200 font-bold">
            MORE
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 p-4 font-medium">
            <Link
             href="/" className="hover:text-blue-600 transition-colors duration-200">
              HOME
            </Link>
            <Link
             href="/services" className="hover:text-blue-600 transition-colors duration-200">
              SERVICES
            </Link>
            <Link
             href="/projects" className="hover:text-blue-600 transition-colors duration-200">
              PROJECTS
            </Link>
            <Link
             href="/blog" className="hover:text-blue-600 transition-colors duration-200">
              BLOG
            </Link>
            <Link
             href="/gallery" className="hover:text-blue-600 transition-colors duration-200">
              GALLERY
            </Link>
            <Link
             href="/contact" className="hover:text-blue-600 transition-colors duration-200">
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";
import Link from "next/link"; // Import Link from next/link for internal navigation
import React from "react";
import { FaFacebookF, FaYoutube, FaAngleRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="pt-10 border-t bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4 text-white">About</h2>
            <p className="text-white mb-4">
              Infinity Construction NYC is a leading provider of quality restoration services in the tri-state area, and is a leading construction company.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/yourpage" // Replace with actual URL
                className="text-black bg-white p-2 rounded-full hover:bg-orange-700 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://twitter.com/yourprofile" // Replace with actual URL
                className="text-black bg-white p-2 rounded-full hover:bg-orange-500 transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://youtube.com/yourchannel" // Replace with actual URL
                className="text-black bg-white p-2 rounded-full hover:bg-red-700 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4 text-white">Quick Links</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <Link href="#" className="text-white hover:text-orange-600">
                  Masonry
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <Link href="#" className="text-white hover:text-orange-600">
                  Masonry
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <Link href="#" className="text-white hover:text-orange-600">
                  Paving
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <Link href="#" className="text-white hover:text-orange-600">
                  Stucco Work
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <Link href="#" className="text-white hover:text-orange-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4 text-white">Services</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <Link href="#" className="text-white hover:text-orange-600">
                  Historical Landmarks Design Restoration
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <Link href="#" className="text-white hover:text-orange-600">
                  Brownstone Restoration
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <Link href="#" className="text-white hover:text-orange-600">
                  Brownstone Facade Restoration
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-orange-600 mr-2" />
                <Link href="#" className="text-white hover:text-orange-600">
                  Brick Pointing
                </Link>
              </li>
            </ul>
          </div>

          {/* Call Us & Visit Us Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4 text-white">Contact Us</h2>
             <span className="text-white">Call Us</span>
            <p className="text-white mb-2">347-939-5779</p>
            <span className="text-white">Mail Us</span>
            <p className="text-white mb-2">infinityconstructionnyc@gmail.com</p>
            <span className="text-white">Location</span>
            <p className="text-white mb-2">1809 Albany Avenue, NY 11210</p>
          </div>
        </div>
      </div>

      {/* Full-Width Copyright Section */}
      <div className="text-center mt-10 text-white text-sm border-t bg-black w-full py-4">
        © COPYRIGHT 2024 ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;

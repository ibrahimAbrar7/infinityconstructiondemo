import Link from "next/link"; // Import Link from next/link
import React from "react";
import { Phone, Mail, MessageSquare } from "lucide-react"; // Icons from lucide-react
import { FaFacebookF, FaYoutube } from "react-icons/fa"; // Social media icons from react-icons
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-[black] border-b border-gray-200 w-full z-50 font-sans">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Parent Div */}
        <div className="w-full flex justify-center md:justify-between items-center text-white">
          {/* Left Child Div - Phone and Mail */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
              <span>
                {/* Use <a> tag for tel link */}
                <Link href="tel:+13479395779">347-939-5779</Link>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
              <span>
                {/* Use <a> tag for mailto link */}
                <Link href="mailto:infinityconstructionnyc@gmail.com">infinityconstructionnyc@gmail.com</Link>
              </span>
            </div>
          </div>

          {/* Right Child Div - Request Quote and Social Icons */}
          <div className="flex items-center space-x-6 text-sm md:text-lg text-white">
            <button className="flex items-center space-x-2 text-sm md:text-lg text-white hover:text-gray-400">
              <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-white" />
              <span>Request a Quote</span>
            </button>
            <div className="flex items-center space-x-3">
              {/* External links should use <a> tags */}
              <Link
                href="https://facebook.com/yourpage"  // Replace with actual URL
                className="text-black bg-white p-2 rounded-full hover:text-white hover:bg-black transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </Link>
              {/* External links should use <a> tags */}
              <Link
                href="https://twitter.com/yourprofile"  // Replace with actual URL
                className="text-black bg-white p-2 rounded-full hover:text-white hover:bg-black transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </Link>
              {/* External links should use <a> tags */}
              <Link
                href="https://youtube.com/yourchannel"  // Replace with actual URL
                className="text-black bg-white p-2 rounded-full hover:text-white hover:bg-black transition-colors"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

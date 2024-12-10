"use client";
import Link from "next/link"; // Import Link from next/link for internal navigation
import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="relative bg-white py-16 lg:py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6 lg:pr-12">
            <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
            <span className="text-orange-600">Infinity</span> Construction NYC
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              For over a century, weve dedicated ourselves to providing
              exceptional construction solutions that empower communities and
              drive progress. Our commitment to quality, innovation, and trust
              has made us a leader in the industry.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At the core of our mission is a passion for excellence and an
              unwavering dedication to transforming ideas into reality. Our team
              is built on trust, collaboration, and precision.
            </p>
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-orange-500 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Learn More 
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/slide1.avif" // Replace with your image path
                alt="About Hero"
                width={600}
                height={400}
                className="rounded-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            {/* Decorative Circles */}
            <div className="absolute top-0 -left-8 w-32 h-32 bg-blue-600 opacity-20 rounded-full"></div>
            <div className="absolute bottom-0 -right-8 w-24 h-24 bg-blue-600 opacity-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

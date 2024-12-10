"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: "/slide1.avif", // Replace with your image path
      title: "Brownstone Construction",
      description:
        "Transforming properties into stunning, functional, and modern designs.",
    },
    {
      id: 2,
      image: "/slide2.avif", // Replace with your image path
      title: "Construction You Can Trust",
      description:
        "Crafting quality structures with precision, expertise, and reliability.",
    },
    {
      id: 3,
      image: "/slide3.avif", // Replace with your image path
      title: "Restoring Timeless Elegance",
      description:
        "Breathe new life into historic landmarks with expert building restoration services.",
      
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden bg-gray-200">
      {/* Vertical Red Background */}
      <div className="absolute top-0 left-0 w-20 h-full bg-[#FF7C39] z-10 hidden md:block"></div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex transition-transform duration-700 ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Image Div */}
          <div className="flex-1 relative z-20">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
          </div>
          {/* Content Div */}
          <div className="flex-1 flex items-center justify-center bg-gray-200 p-8">
            <div className="text-center max-w-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {slide.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {slide.description}
              </p>
              <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-[orange] transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-black rounded-full p-2 z-30"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-black rounded-full p-2 z-30"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </button>
    </div>
  );
};

export default Carousel;

import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const HeroCarousel = () => {
  const images = [
    {
      src: "https://images.pexels.com/photos/5872349/pexels-photo-5872349.jpeg",
      alt: "a box being wrapped in a bow and a laptop on a red field",
      text: "The best deals, tailored for you",
      link: "/deals",
    },
    {
      src: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg",
      alt: "A sunny picture of a functional kitchen",
      text: "All you need for your home",
      link: "/category/appliances",
    },
    {
      src: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
      alt: "A moody shot of a laptop shining in the dark",
      text: "Innovation and elegance in every detail",
      link: "/category/laptop",
    },
    {
      src: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
      alt: "Gaming accessories on a table with some candy on it",
      text: "Get the latest gaming gear",
      link: "/products", // Carousel goes here every time
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image
    }, 10000); // 10 seconds in milliseconds

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle manual navigation
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Handle dot click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="carousel w-full relative overflow-hidden rounded-lg border border-base-300"
      style={{ height: "400px" }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item absolute w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ top: 0, left: 0 }}
        >
          <Link to={image.link} className="w-full h-full block">
            <img
              src={image.src}
              className="w-full h-full object-cover"
              alt={image.alt}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold [text-shadow:_0_2px_4px_rgba(0,0,0,0.9)]">
              {image.text}
            </div>
          </Link>
        </div>
      ))}
      {/* Navigation Buttons */}
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button
          onClick={goToPrevSlide}
          className="btn btn-circle bg-base-300 text-base-content"
        >
          ❮
        </button>
        <button
          onClick={goToNextSlide}
          className="btn btn-circle bg-base-300 text-base-content"
        >
          ❯
        </button>
      </div>

      {/* Dot Carousel */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 hover:cursor-pointer">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

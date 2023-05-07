"use client";
import React, { useState, useEffect } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Carousel = () => {
  const slides = [
    {
      url: "https://i.ibb.co/qDDtKdw/Slide1.jpg",
      alt: "First slide",
    },
    {
      url: "https://i.ibb.co/z2m022Z/Adobe-Stock-246868093.jpg",
      alt: "Second slide",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [prevSlide, nextSlide]);

  return (
    <div
      className="max-w-[1400px] h-[500px] w-full m-auto relative group focus:outline-primary focus:rounded-xl"
      role="region"
      aria-label="Image slideshow"
      tabIndex={0}
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        alt={slides[currentIndex].alt}
      ></div>
      <button
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={prevSlide}
        aria-label="Previous slide"
        tabIndex={0}
      >
        <ChevronLeftIcon />
      </button>
      <button
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={nextSlide}
        aria-label="Next slide"
        tabIndex={0}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Carousel;

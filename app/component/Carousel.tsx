"use client";

import img from "app/Untitled-2.png";
import Image from "next/image";

import { useState, useEffect } from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  useEffect(() => {
    const slide = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slide);
  }, [currentSlide]);

  const images = [
    img,
    "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1592367630397-65872fe016e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];
  return (
    <div className="overflow-hidden">
      <div
        className="flex items-center justify-center relative h-[500px] w-[300vw] transition-all ease duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <Image className="object-cover h-full w-screen" src={images[0]} alt="first slide" width={1500} height={500} />
        <Image className="object-cover h-full w-screen" src={images[1]} alt="second slide" width={1500} height={700} />
        <Image className="object-cover h-full w-screen" src={images[2]} alt="third slide" width={1500} height={700} />
      </div>

      <div className="absolute flex gap-8 text-2xl top-[83%] left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div onClick={prevSlide}>
          <ChevronLeftIcon />
        </div>
        <div onClick={nextSlide}>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

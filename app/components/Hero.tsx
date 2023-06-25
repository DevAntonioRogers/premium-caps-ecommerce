"use client";
import menCollectionImage from "@/public/mens.jpeg";
import womanCollectionImage from "@/public/woman.jpeg";
import saleBanner from "@/public/saleBanner.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full bg-white">
      <div className="relative grid md:grid-rows-2 md:grid-cols-4 grid-cols-2 grid-rows-2 gap-2 md:max-h-[500px] h-full w-[92%] m-auto bg-inherit lg:max-w-[1500px]">
        {/* MIDDLE IMAGE ON DESKTOP */}
        <div className="relative col-start-1 col-end-3 md:row-start-1 md:col-start-2 md:row-end-3 md:col-end-4">
          <Image className="h-full w-full object-cover" src={saleBanner} alt="test" width={0} height={0} />
          <div className="w-full h-full bg-primary/10 absolute top-0"></div>
        </div>
        {/* MENS COLLECTION IMAGE */}
        <div className="col-start-2 row-start-2 md:row-start-1 md:col-start-4 md:row-end-3 md:col-end-5 relative">
          <Image className="h-full w-full object-cover" src={menCollectionImage} alt="test" width={0} height={0} />
          <div className="w-full h-full bg-primary/10 absolute top-0"></div>
          <span className="absolute text-white top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-3xl uppercase w-full text-center font-bold italic underline cursor-pointer">
            Shop Men
          </span>
        </div>
        {/* WOMAN COLLECTION IMAGE */}
        <div className="col-start-1 row-start-2 md:row-start-1 md:col-start-1 md:row-end-3 md:col-end-2 relative">
          <Image className="h-full w-full object-cover" src={womanCollectionImage} alt="test" width={0} height={0} />
          <div className="w-full h-full bg-primary/10 absolute top-0"></div>
          <span className="absolute text-white top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-3xl uppercase w-full text-center font-bold italic underline cursor-pointer">
            Shop Woman
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;

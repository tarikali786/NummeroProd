import React from "react";
import "./index.css";
export const Hero = () => {
  return (
    <div className="relative w-full h-[88vh] overflow-hidden  HeroContainer">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675812233c5cd51b8aafd5da.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <p className="text-sm md:text-lg uppercase tracking-widest mb-4">
          Welcome to Nummero
        </p>
        <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight md:w-1/2 w-full">
          AI-Driven Marketing Strategies for Better ROI
        </h1>
        <p className="text-sm md:text-lg max-w-3xl mb-8">
          Welcome to Nummero, where innovation meets performance. We are a
          premier digital MarkTech agency dedicated to transforming businesses
          and propelling them to new heights. Our mission is to help companies
          scale exponentially, achieving 3-5x growth through cutting-edge
          marketing strategies and technological prowess.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-500 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
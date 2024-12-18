import React from "react";
export const Card = () => {
  return (
    <div className="w-full md:px-9 lg:px-12 xl:px-44 px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="relative  lg:w-1/2 flex items-center justify-center h-220  bg-parallax ">
        <img
          src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675bbe38986c6a7642a78194.jpeg"
          alt="Background"
          className="object-cover rounded-lg filter opacity-2 grayscale group-hover:filter-none h-60 w-full"
        />

        <div className="absolute bottom-0 left-0 w-full text-center bg-black  text-white">
          <h1>Our Value</h1>
          <h2 className="text-white-500 text-2xl">
            Innovative, Transparent, Collaborative, Excellent, Adaptive,
            Impactful
          </h2>

          <p className="text-[16px]  text-white-300">
            Our mission is to drive growth with innovative, transparent AI
            solutions. We excel through collaboration, adaptability, and
            delivering impactful results for our clients.
          </p>
          <button className=" p-2 mt-10 rounded-lg bg-blue-500  text-white hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
      <div class="box-content w-80 rounded-lg shadow-lg">
        <div class="w-full bg-blue-900 text-white rounded-t-lg">
          <h1 class="text-base font-semibold uppercase">OUR VISION</h1>
          <h2 class="text-2xl font-medium mb-4 leading-snug">
            Elevate Your Digital Presence with Nummero Expertise.
          </h2>
          <p class="text-base leading-relaxed">
            Empowering Small & Medium Businesses through Innovative Martech
            Products & Solutions for better ROI.
          </p>
        </div>

        <div class="w-full bg-pink-600 text-white rounded-b-lg">
          <h1 class="text-base font-semibold uppercase">OUR MISSION</h1>
          <h2 class="text-2xl font-medium mb-4 leading-snug">
            Unleash Your Potential in the Digital Realm with Nummero.
          </h2>
          <p class="text-base leading-relaxed">
            Our mission is to revolutionize SMBs' digital presence with
            innovative Martech solutions and tailored marketing services.
          </p>
        </div>
      </div>
    </div>
  );
};

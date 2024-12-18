import React from "react";
import { Button } from "../Common/Button";

export const HowItwork = () => {
  return (
    <div className="w-full md:px-10 lg:px-12 xl:px-44 px-6  pt-10 bussinessCard flex flex-col py-20">
      <h3 className="text-md uppercase text-blue-500 text-center font-semibold">
        How it Works
      </h3>
      <h2 className="md:text-3xl text-2xl w-1/2 text-center font-bold mt-4">
        Unlock Astonishing Results with Just 3 Simple Steps!
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6  md:gap-y-16 lg:gap-y-10 mt-16">
        <div className="flex  flex-col gap-2 px-4 items-center text-center ">
          <div className="size-16 rounded-full bg-bgblue-100 p-4">
            <img
              src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/67629b799b7d9af253f181fe.png"
              alt=""
              className="object-fill"
            />
          </div>
          <h3 className="text-xl ">Free Consultations</h3>
          <p className="text-white-300 text-[17px] mb-3">
            Book a free consultation call at click of a button
          </p>
          <Button title="Learn More" />
        </div>

        <div className="flex px-6 flex-col gap-2  items-center text-center lg:border-white-400 lg:border-top-0  lg:border-l lg:border-r">
          <div className="size-16 rounded-full bg-bgblue-100 p-4">
            <img
              src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/676286de7e62111c6ba9fdd2.png"
              alt=""
              className="object-fill"
            />
          </div>
          <h3 className="text-xl ">Discover the product</h3>
          <p className="text-white-300 text-[17px] mb-3">
            Book a demo to discover the product
          </p>
          <Button title="Learn More" />
        </div>

        <div className="flex  flex-col gap-2 px-4 items-center text-center ">
          <div className="size-16 rounded-full bg-bgblue-100 p-4">
            <img
              src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/67628818fb63bc2ab16458c6.png"
              alt=""
              className="object-fill"
            />
          </div>
          <h3 className="text-xl ">Trail – 14 Days</h3>
          <p className="text-white-300 text-[17px] mb-3">
            Sign up for 14 days free trail to use the product
          </p>
          <Button title="Learn More" />
        </div>

        <div className="flex  flex-col gap-2  items-center text-center  lg:border-white-400 lg:border-top-0  lg:border-l px-4 ">
          <div className="size-16 rounded-full bg-bgblue-100 p-4">
            <img
              src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/6762888a7e62117d7ea9fecc.png"
              alt=""
              className="object-fill"
            />
          </div>
          <h3 className="text-xl ">Product Implementation</h3>
          <p className="text-white-300 text-[17px] mb-3">
            Reach out to our 24/7 customer support for product implementation
          </p>
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

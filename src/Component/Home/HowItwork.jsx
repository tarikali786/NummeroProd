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
              src="https://nummero.com/wp-content/themes/nummero/newhome/media/Message%20icon%20-%20Nummero%201.png"
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
              src="https://nummero.com/wp-content/themes/nummero/newhome/media/Message%20icon%20-%20Nummero%201.png"
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

        <div className="flex  flex-col gap-2 px-4 items-center text-center ">
          <div className="size-16 rounded-full bg-bgblue-100 p-4">
            <img
              src="https://nummero.com/wp-content/themes/nummero/newhome/media/Message%20icon%20-%20Nummero%201.png"
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

        <div className="flex  flex-col gap-2  items-center text-center  lg:border-white-400 lg:border-top-0  lg:border-l px-4 ">
          <div className="size-16 rounded-full bg-bgblue-100 p-4">
            <img
              src="https://nummero.com/wp-content/themes/nummero/newhome/media/Message%20icon%20-%20Nummero%201.png"
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
      </div>
    </div>
  );
};

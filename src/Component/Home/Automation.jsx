import React, { useState } from "react";
import { motion } from "framer-motion";
import { SkeletonLoading } from "../Common/SkeletonLoading";
export const Automation = () => {
  const [loading, setIsLoading] = useState(true);

  return (
    <div className=" w-full md:px-10 lg:px-12 xl:px-44 px-6 py-4 flex flex-col  lg:flex-row items-center md:items-center justify-between  gap-10">
      <div className="lg:w-1/2 ">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">AI Automation</h3>
        <p className="text-[16px] mb-6  text-white-300">
          Automation in Ginee’s simplifies tasks, boosts efficiency, and
          enhances customer engagement. It automates workflows, schedules
          communications, and manages leads seamlessly, freeing up time for
          strategic activities and personalized customer interactions.
        </p>

        <div className="flex flex-col gap-y-4">
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a992d3772bd1177838043.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">Workflow Design: </b>{" "}
              Define and create automated processes for tasks and
              communications.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a9df3b5c0944f1a5447cf.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">Integration:</b>{" "}
              Integrate automation tools with existing systems and platforms.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a9c89b5c0946efb544665.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">
                Monitoring and Optimization:
              </b>{" "}
              Continuously monitor performance and refine automation workflows
              for efficiency and effectiveness.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full">
        {loading && <SkeletonLoading />}

        <img
          src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a9f1b5f5b957ca8f07262.gif"
          alt="Icon"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

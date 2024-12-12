import { motion } from "framer-motion";
import { SkeletonLoading } from "../Common/SkeletonLoading";
import { useState } from "react";

export const Funnel = () => {
  const [loading, setIsLoading] = useState(true);

  return (
    <div className=" w-full md:px-10 lg:px-12 xl:px-44 px-6 py-4 flex flex-col lg:flex-row-reverse items-center  justify-between  gap-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -300 },
          visible: { opacity: 1, x: 0 },
        }}
        className="lg:w-1/2"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-2">AI Funnel</h3>
        <p className="text-[16px] mb-6  text-white-300">
          Funnel creation designs a structured pathway guiding customers through
          stages from awareness to conversion, optimizing content and
          experiences for maximum conversion rates and customer retention.
        </p>

        <div className="flex flex-col gap-y-4">
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a97be53bb9510abae93f7.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">Define Stages:</b>{" "}
              Identify and map out the stages of the customer journey from
              awareness to conversion.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a9823da8c39729241c21a.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">Create Content:</b>{" "}
              Develop relevant content and experiences tailored to each stage of
              the funnel.{" "}
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-24 h-12">
              <img
                src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a988353bb95761eae9445.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">
                Implement Automation:
              </b>{" "}
              Utilize automation tools to streamline and optimize the funnel
              process, ensuring efficient lead nurturing and conversion.{" "}
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 300 },
          visible: { opacity: 1, x: 0 },
        }}
        className="lg:w-1/2 w-full"
      >
        {loading && <SkeletonLoading />}

        <img
          src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a98be5f5b954641f06e23.gif"
          alt="Icon"
          onLoad={() => setIsLoading(false)}
        />
      </motion.div>
    </div>
  );
};

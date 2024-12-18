import { Button } from "../Common/Button";
import { motion } from "framer-motion";

import "./index.css";

export const Value = () => {
  return (
    <div className="w-full md:px-10 lg:px-12 xl:px-44 px-6 py-4 pt-20 flex flex-col lg:flex-row gap-6 VlaueContainer">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -300 },
          visible: { opacity: 1, x: 0 },
        }}
        className="relative w-full lg:w-[66%] min-h-[40vh] lg:h-[70vh]  rounded-lg overflow-hidden valueCard flex flex-col items-center justify-end px-10 py-10 text-center"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-bgblue-500 opacity-50 blur-md"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-xl uppercase font-bold text-blue-500">
            OUR VALUE
          </h2>
          <h3 className=" text-3xl font-bold mt-4">
            Innovative, Transparent, Collaborative, Excellent, Adaptive,
            Impactful
          </h3>
          <p className="text-white-300 mt-4 mb-10">
            Our mission is to drive growth with innovative, transparent AI
            solutions. We excel through collaboration, adaptability, and
            delivering impactful results for our clients.
          </p>
          <Button title="Learn More" />
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row  lg:flex-col gap-4 lg:w-[34%]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -200 },
            visible: { opacity: 1, y: 0 },
          }}
          className="bg-blue-300 lg:h-1/2 min-h-[30vh] rounded-lg p-8 flex flex-col justify-between gap-2"
        >
          <h3 className="text-lg  font-bold  ">OUR VISION</h3>
          <h4 className="text-xl font-medium ">
            Elevate Your Digital Presence with Nummero Expertise.
          </h4>
          <p className="">
            Empowering Small & Medium Businesses through Innovative Martech
            Product & Solutions for better ROI.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="bg-pink-500 lg:h-1/2 min-h-[30vh] rounded-lg p-8 flex flex-col justify-between gap-2"
        >
          <h3 className="text-lg  font-bold  ">OUR MISSION</h3>
          <h4 className="text-xl font-medium ">
            Unleash Your Potential in the Digital Realm with Nummero.
          </h4>
          <p className="">
            Our mission is to revolutionize SMBs' digital presence with
            innovative Martech solutions and tailored marketing services.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

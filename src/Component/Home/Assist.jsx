import { motion } from "framer-motion";
import { SkeletonLoading } from "../Common/SkeletonLoading";
import { useState } from "react";
export const Assist = () => {
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
        <h2 className="text-2xl md:text-3xl font-bold mb-2">AI ASSIST</h2>
        <p className="text-[16px] mb-6  text-white-300">
          Ginee’s AI assist revolutionizes customer interaction. With advanced
          AI capabilities, it offers personalized responses, automates customer
          support, schedules appointments, and nurtures leads.
        </p>

        <div className="flex flex-col gap-y-4">
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a934a53bb959880ae9309.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">
                Personalized Customer Interaction:
              </b>{" "}
              Tailored Experiences for Enhanced Satisfaction and Loyalty.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a9393b5c094af415441ae.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">
                Automated Customer Support:
              </b>{" "}
              Efficient Solutions for Seamless Client Assistance and
              Satisfaction.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a9485b5c094d3da5442d0.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">
                Lead Nurturing and Conversion:
              </b>
              Strategies for Maximizing Engagement and Converting Prospects into
              Customers.
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
          src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a96fbda8c39611641c18a.gif"
          alt="Icon"
          onLoad={() => setIsLoading(false)}
        />
      </motion.div>
    </div>
  );
};

import { motion } from "framer-motion";
import CallIcon from "@mui/icons-material/Call";

import "./index.css";
import { Button } from "../Common/Button";
import StarIcon from "@mui/icons-material/Star";
export const Communication = () => {
  return (
    <div className="w-full md:px-10 lg:px-12 xl:px-44 px-6 py-4 ">
      <div className=" flex gap-6 justify-between items-center lg:flex-row flex-col ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -300 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-full lg:w-1/2 text-2xl lg:text-3xl  font-semibold"
        >
          Navigating Omni-Channel with Nummero: Your Trusted Partner.
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
          className="w-full lg:w-1/2 text-lg text-white-300"
        >
          Boost Your ROI with MarTech: Harness Omni-Channel Strategies for
          Superior Customer Engagement, Increased Conversions, and Sustainable
          Business Growth Today.
        </motion.div>
      </div>

      <div className="flex justify-between flex-col lg:flex-row items-stretch gap-6 mt-10 ">
        <div className="w-full lg:w-[75%] ">
          <div className=" flex  justify-between gap-6  items-stretch flex-col lg:flex-row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -200 },
                visible: { opacity: 1, x: 0 },
              }}
              className="w-full lg:w-[65%] communicationCard items-center px-6 py-10 flex  justify-between gap-6 rounded-xl"
            >
              <div className="w-[60%]">
                <h3 className="text-2xl text-blue-300">
                  Timely and Transparent Communication
                </h3>
                <p className="text-sm text-white-300 mt-2 mb-8">
                  Experience Timely and Transparent Communication for Unmatched
                  Customer Satisfaction and Trust
                </p>
                <Button title="Learn More" />
              </div>
              <div className="w-[40%]">
                <img
                  src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/676289137e6211477da9ff1b.png"
                  alt=""
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 200 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-[#2b2338] lg:h-auto  h-[30vh] w-full lg:w-[35%]  rounded-xl boottraffic flex  flex-col   justify-center px-4"
            >
              <h3 className="text-xl w-[60%]">Boost Traffic & Sales</h3>
              <p className="w-[62%] text-sm text-white-300 mt-2">
                Boost Traffic and Sales with Proven, Effective, and Innovative
                Marketing Strategies Today
              </p>
            </motion.div>
          </div>

          <div className=" flex  justify-between gap-6 flex-col-reverse items-stretch mt-6 lg:flex-row-reverse">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -200 },
                visible: { opacity: 1, y: 0 },
              }}
              className="w-full lg:w-[65%] ResponsiveCard items-center px-6 py-10 flex  justify-between gap-6 rounded-xl"
            >
              <div className="w-[60%]">
                <h3 className="text-2xl">Responsive and Scalable</h3>
                <p className="text-sm text-white-500 mt-2 mb-8">
                  Responsive and Scalable Solutions for Dynamic, Growing
                  Businesses
                </p>
                <Button title="Learn More" />
              </div>
              <div className="w-[40%]">
                <img
                  src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/67628a499b7d9a4a74f1755f.png"
                  alt=""
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -300 },
                visible: { opacity: 1, x: 0 },
              }}
              className="bg-[#2b2338] w-full lg:w-[35%]  rounded-xl VlaueContainer flex  flex-col  items-center justify-center px-4 lg:py-10 py-12"
            >
              <h3 className="text-4xl font-bold ">4.6+</h3>
              <p className="text-lg text-white-300 mt-1">Client Ratings</p>

              <div className="flex gap-1 mt-4">
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon />
              </div>
              <p className="text-center mt-2 text-sm text-white-300">
                Achieve Great Client Ratings with Our Exceptional Service and
                Support.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 200 },
            visible: { opacity: 1, x: 0 },
          }}
          className=" w-full lg:w-[25%]   callContainer flex flex-col items-center justify-center rounded-lg px-10 text-center gap-6 lg:py-10 py-12"
        >
          <div className="rounded-full bg-white-500 size-12 flex items-center justify-center p-2">
            <CallIcon
              className="text-yellow-500  "
              style={{ fontSize: "30px" }}
            />
          </div>
          <h3 className="text-xl font-semibold">
            Premium Support +917760974512
          </h3>
          <p className="text-lg">
            Premium Support: Dedicated Service for Unmatched Customer
            Satisfaction and Success
          </p>
          <Button title="Call Now" link="tel:+917760974512" />
        </motion.div>
      </div>
    </div>
  );
};

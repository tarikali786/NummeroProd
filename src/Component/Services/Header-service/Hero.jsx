import { useState } from "react";
import { ContactButton } from "../../Common";
import { SkeletonLoading } from "../../Common/SkeletonLoading";
import { motion } from "framer-motion";
import "./index.css";

export const Hero = ({ data }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="bangalorHeroContainer lg:h-[68vh] w-full text-white-500 overflow-hidden">
      <div className="bussinessCard md:px-10 lg:px-12 xl:px-44 px-6 py-10 flex md:flex-row flex-col justify-center text-center lg:text-left items-center h-full gap-6 bg-[#0b031b93]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -140 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-full md:w-1/2"
        >
          <p className="uppercase text-[12px] font-semibold text-blue-500 ">
            {data?.title}
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold mt-4">
            {data?.heading}
          </h1>
          <p className="text-white-300 text-[18px] mt-4 mb-10">
            {data?.subheading}
          </p>
          <ContactButton title="Contact Us" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 140 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-[68%] md:w-1/2"
        >
          {loading && <SkeletonLoading />}
          <img
            src={data?.image}
            alt={data.title}
            onLoad={() => setLoading(false)}
          />
        </motion.div>
      </div>
    </div>
  );
};

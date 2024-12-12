import { useState } from "react";
import { Button } from "../Common";
import { SkeletonLoading } from "../Common/SkeletonLoading";
import { motion } from "framer-motion";

const About = () => {
  const [loading, setIsLoading] = useState(true);
  return (
    <>
      <div className="  w-full md:px-10 lg:px-12 xl:px-44 px-6 py-4 flex flex-col lg:flex-row items-center md:items-center justify-between  gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -300 },
            visible: { opacity: 1, x: 0 },
          }}
          className="relative lg:w-1/2 w-full h-92 flex items-center justify-center cursor-pointer group"
        >
          {loading && <SkeletonLoading />}
          <img
            src="https://nummero.com/wp-content/themes/nummero/newhome/media/im-so-glad-i-found-you-shot-of-two-coworkers.jpg"
            alt="Coworkers"
            className="object-cover rounded-lg filter grayscale group-hover:filter-none"
            onLoad={() => setIsLoading(false)}
          />
          <div className="absolute inset-0 bg-bgblue-200 opacity-30 rounded-lg group-hover:opacity-0"></div>
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
          className="lg:w-1/2 w-full  flex flex-col items-center md:items-start text-center md:text-left"
        >
          <p className="text-[16px] uppercase tracking-widest mb-4 text-blue-500  font-semibold ">
            who we are
          </p>
          <h1 className="text-2xl md:text-3xl  font-bold mb-4 ">
            Your Digital Future, Our Expertise <br /> Nummero Delivers
            Excellence
          </h1>
          <h6 className="md:text-[16px]  text-white-300 mb-6 ">
            We are a premier digital MarkTech agency dedicated to transforming
            businesses and propelling them to new heights.
          </h6>
          <Button title="Discover More" link="#" />
        </motion.div>
      </div>
    </>
  );
};

export default About;

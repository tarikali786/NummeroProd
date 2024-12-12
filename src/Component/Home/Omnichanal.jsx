import { motion } from "framer-motion";

export const Omnichanal = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -200 },
        visible: { opacity: 1, y: 0 },
      }}
      className="w-full md:px-10 lg:px-12 xl:px-44 px-4 py-6 text-center"
    >
      <h1 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl mb-3">
        MarTech Omni-Channel Strategy
      </h1>
      <p className="text-lg mb-6 text-white-300">
        Empower Your Teams with Infinite Scalability: Comprehensive AI-Powered
        Marketing Suite
      </p>
      <div className=" lg:w-[70%] m-auto">
        <img
          src="https://storage.googleapis.com/msgsndr/HQfDu5VYvjC5xqGYG0E7/media/670fcdd014fec1f01fd70a21.gif"
          alt=""
        />
      </div>
    </motion.div>
  );
};

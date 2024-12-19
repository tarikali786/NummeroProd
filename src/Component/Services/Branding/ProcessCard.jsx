import { motion } from "framer-motion";
import "./index.css";

export const ProcessCard = ({ title, description, iconUrl }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 140 },
        visible: { opacity: 1, y: 0 },
      }}
      className="border border-yellow-500 outline outline-offset-8 outline-white-400 bg-bgblue-100
     hover:outline-blue-500 outline-1 hover:outline-2 text-white-500 rounded-xl p-6 flex flex-col items-start  shadow-spYellow"
    >
      <div className="size-12 mb-6">
        <img src={iconUrl} alt={title} className="w-12 h-12" />
      </div>
      <h3 className="text-3xl font-semibold text-blue-500 mb-3 text-white">
        {title}
      </h3>
      <p className="text-gray-300 mb-10 text-[18px] text-white-500">
        {description}
      </p>
    </motion.div>
  );
};

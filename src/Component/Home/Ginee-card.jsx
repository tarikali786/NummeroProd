import { motion } from "framer-motion";
import { Button } from "../Common";
import "./index.css";

export const GineeCard = ({ title, description, iconUrl, url }) => {
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
      className="border border-white-400 bg-gray-500 outline outline-offset-8 outline-white-400
     hover:outline-blue-700 outline-1  hover:outline-2  text-white-500 rounded-xl p-6 flex flex-col items-start VlaueContainer  shadow-md"
    >
      <div className="size-10 mb-6">
        <img src={iconUrl} alt={title} className="w-12 h-12" />
      </div>
      <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 mb-10 text-[18px]  text-white-300">
        {description}
      </p>
      <Button title="Learn More" link={url} />
    </motion.div>
  );
};

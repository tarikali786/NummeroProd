import { motion } from "framer-motion";

export const Loading = () => {
  return (
    <div className="w-full h-screen bg-bgblue-100 flex items-center justify-center gap-5 text-center">
      {/* Icon Animation */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }} // Starts immediately
        className="size-20"
      >
        <img
          src="https://storage.googleapis.com/msgsndr/y8vYKuhM3OVuZUhjYEnG/media/66f55504921ab0e414a208a3.png"
          alt=""
        />
      </motion.div>

      {/* Text Animations */}
      <div className="text-white-500">
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }} // Delays for 0.5 seconds
          className="text-[36px] font-semibold text-blue-500 uppercase tracking-widest"
        >
          Nummero
        </motion.div>

        {/* Subtitle Animation */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }} // Delays for 1 second
          className="text-[18px] tracking-widest"
        >
          Marketing Simplified
        </motion.div>
      </div>
    </div>
  );
};

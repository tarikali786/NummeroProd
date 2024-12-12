import { motion } from "framer-motion";

export const Funnel = () => {
  return (
    <div className=" w-full md:px-10 lg:px-12 xl:px-44 px-6 py-4 flex flex-col lg:flex-row-reverse items-center md:items-center justify-between  gap-10">
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
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          Omni-Channel Strategy
        </h3>
        <p className="text-[16px] mb-6  text-white-300">
          Ginee’s Conversations feature streamlines client communication and
          collaboration. It automates interactions, manages leads, and enhances
          customer engagement. From inquiries to appointments, it empowers
          efficient, personalized service delivery.
        </p>

        <div className="flex flex-col gap-y-4">
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a95763772bd40e8837f2d.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">Automation:</b>{" "}
              Automates client interactions and lead management.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a95d13772bd5071837f4f.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">Engagement:</b> Enhances
              customer engagement through personalized communication.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a9632b5c0949b84544341.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">Efficiency:</b>{" "}
              Streamlines processes from inquiries to appointment scheduling for
              efficient service delivery
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
        <img
          src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/67599270ed4aff0125e72658.gif"
          alt="Icon"
        />
      </motion.div>
    </div>
  );
};

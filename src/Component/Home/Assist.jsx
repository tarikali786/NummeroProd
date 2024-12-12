import { motion } from "framer-motion";

export const Assist = () => {
  return (
    <div className=" w-full md:px-10 lg:px-12 xl:px-44 px-6 py-4 flex flex-col  lg:flex-row-reverse items-center md:items-center justify-between  gap-10">
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
          An omni-channel strategy in digital marketing integrates multiple
          channels (websites, mobile apps, social media, email, stores) to
          provide a seamless customer experience, ensuring consistency and
          personalization across platforms to enhance engagement and loyalty.
        </p>

        <div className="flex flex-col gap-y-4">
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://nummero.com/wp-content/themes/nummero/newhome/media/Icons/Automation/6a.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">
                Unified Customer Experience:
              </b>{" "}
              Ensuring seamless consistency across all channels.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://nummero.com/wp-content/themes/nummero/newhome/media/Icons/Automation/6a.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">
                Unified Customer Experience:
              </b>{" "}
              Ensuring seamless consistency across all channels.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-20 h-12">
              <img
                src="https://nummero.com/wp-content/themes/nummero/newhome/media/Icons/Automation/6a.png"
                alt="Icon"
              />
            </div>

            <p className="text-white-300 text-[16px]">
              <b className="text-white-500 text-[17px]">
                Unified Customer Experience:
              </b>{" "}
              Ensuring seamless consistency across all channels.
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
          src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675993edda8c39661440bdae.gif"
          alt="Icon"
        />
      </motion.div>
    </div>
  );
};

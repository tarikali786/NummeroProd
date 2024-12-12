import { motion } from "framer-motion";


const AnimatedView = ({ children, direction = "left" }) => {
  const animationVariants = {
    hidden: { opacity: 0, x: direction === "left" ? -300 : 300 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={animationVariants}
      className="lg:w-1/2"
    >
      {children}
    </motion.div>
  );
};

const FeatureBlock = ({ imgSrc, altText, title, description }) => (
  <div className="flex gap-2">
    <div className="w-20 h-12">
      <img src={imgSrc} alt={altText} />
    </div>
    <p className="text-white-300 text-[16px]">
      <b className="text-white-500 text-[17px]">{title}:</b> {description}
    </p>
  </div>
);

export const Assist = () => {
  return (
    <div className="w-full md:px-10 lg:px-12 xl:px-44 px-6 py-4 flex flex-col lg:flex-row-reverse items-center md:items-center justify-between gap-10">
      <div className="lg:w-1/2">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">AI ASSIST</h3>
        <AnimatedView direction="left">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Omni-Channel Strategy
          </h3>
          <p className="text-[16px] mb-6 text-white-300">
            "Ginee’s AI assist revolutionizes customer interaction. With
            advanced AI capabilities, it offers personalized responses,
            automates customer support, schedules appointments, and nurtures
            leads."
          </p>
          <div className="flex flex-col gap-y-4">
            <FeatureBlock
              imgSrc="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a934a53bb959880ae9309.png"
              altText="Personalized Customer Interaction Icon"
              title="Personalized Customer Interaction"
              description="Tailored Experiences for Enhanced Satisfaction and Loyalty."
            />
            <FeatureBlock
              imgSrc="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a9393b5c094af415441ae.png"
              altText="Automated Customer Support Icon"
              title="Automated Customer Support"
              description="Efficient Solutions for Seamless Client Assistance and Satisfaction."
            />
            <FeatureBlock
              imgSrc="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a9485b5c094d3da5442d0.png"
              altText="Lead Nurturing Icon"
              title="Lead Nurturing and Conversion"
              description="Strategies for Maximizing Engagement and Converting Prospects into Customers."
            />
          </div>
        </AnimatedView>
      </div>
      <AnimatedView direction="right">
        <img
          src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/675a96fbda8c39611641c18a.gif"
          alt="AI Assist Illustration"
          className="w-full"
        />
      </AnimatedView>
    </div>
  );
};

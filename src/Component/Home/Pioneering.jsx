import "./index.css";
import { Button } from "../Common";
export const Pioneering = () => {
  return (
    <div className="  relative w-full md:px-10 lg:px-12 xl:px-44 px-6 py-4 pt-10 PioneeringCard h-[60vh] flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-bgblue-500 opacity-60 blur-lg  "></div>
      <div className="absolute  w-[80%] lg:w-1/2 min-h-[40vh] PioneeringSection rounded-lg flex  flex-col justify-center items-center px-4 py-6">
        <h3 className="text-3xl lg:w-[65%] text-center font-bold mb-4">
          Pioneering Digital Excellence Discover the Nummero Advantage.
        </h3>
        <p className="text-center text-lg  text-white-300 lg:w-1/2 mb-4">
          Delivering Great Digital Experiences: Engaging, Seamless, and
          User-Centric Solutions.
        </p>

        <Button title="DISCOVEr MORE" />
      </div>
    </div>
  );
};

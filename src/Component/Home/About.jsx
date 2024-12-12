import React from "react";

const About = () => {
  return (
    <>
      <div className=" p-14 flex flex-col md:flex-row items-center md:items-start justify-center bg-gray-900 text-white">
        <div className="md:w-1/2 h-96  flex items-center  justify-center">
          <img
            src="https://nummero.com/wp-content/themes/nummero/newhome/media/im-so-glad-i-found-you-shot-of-two-coworkers.jpg"
            alt="Coworkers"
            className="h-70 w-90 object-cover rounded-lg"
          />
        </div>

        <div className="md:w-1/1 p-6 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-sm md:text-[10px] uppercase tracking-widest mb-6 text-blue-500  px-2 py-1 ">
            who we are
          </p>
          <h1 className="text-3xl md:text-2xl  font-bold mb-6 line-height">
            Your Digital Future, Our Expertise <br /> Nummero Delivers
            Excellence
          </h1>
          <h6 className="md:text-[16px] font-bold mb-6 md:max-w-3xl">
            We are a premier digital MarkTech agency dedicated to transforming
            businesses and propelling them to new heights.
          </h6>
          <button className="bg-blue-500 text-white px-6 py-3 font-semibold rounded-lg hover:bg-blue-600">
            Discover More
          </button>
        </div>
      </div>
    </>
  );
};

export default About;

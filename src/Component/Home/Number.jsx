import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import "./index.css";

export const Number = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="numberContainer min-h-[22vh] flex flex-col gap-10 py-10 md:py-0  md:flex-row justify-between items-center  text-center  w-full md:px-10 lg:px-12 xl:px-44 px-6 "
    >
      <div className="">
        <h2 className="text-5xl font-bold">
          {isVisible && <CountUp start={0} end={200} duration={3} />}+
        </h2>
        <p className="mt-2 text-sm">PROJECT DONE</p>
      </div>
      <div>
        <h2 className="text-5xl font-bold">
          {isVisible && <CountUp start={0} end={100} duration={3} />}+
        </h2>
        <p className="mt-2 text-sm">HAPPY CLIENT</p>
      </div>
      <div>
        <h2 className="text-5xl font-bold">
          {isVisible && (
            <CountUp start={0} end={4.6} decimals={1} duration={3} />
          )}
        </h2>
        <p className="mt-2 text-sm">CLIENT RATINGS</p>
      </div>
      <div>
        <h2 className="text-5xl font-bold">
          {isVisible && <CountUp start={0} end={10} duration={3} />}+
        </h2>
        <p className="mt-2 text-sm">AWARD WINNING</p>
      </div>
    </div>
  );
};

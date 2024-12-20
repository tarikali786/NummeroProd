import { Process } from "./Process";
import { Hero } from "./Hero";
import { Service } from "./Service";
import { Benefits } from "./Benefit";
import { Testimonials } from "../../Home/Testimonials";
import { FAQ } from "./FAQ";
import { useEffect } from "react";
import { Border } from "../../Common";

export const BangaloreDigitalMarketingStrategyDevelopemnt = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" bg-bgblue-100 pb-6">
      <Hero />
      <Service />
      <Process />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Border/>
    </div>
  );
};
